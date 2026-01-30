// Function to send email notifications
function sendNewSubmissionEmailNotification(subject, body) {
  const recipient = 'info@sgbigdata.com';
  const senderName = 'SGBigData';
  
  // Ensure subject and body are never empty
  subject = subject || 'New Subscriber';
  body = body || 'A new subscriber was added.';
  
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: body,
    name: senderName,
  });
}

// Handle preflight OPTIONS request for CORS
function doOptions() {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.TEXT);
  output.setContent('');
  return buildResponse(output);
}

// Handle GET requests (for testing)
function doGet() {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ 
    status: 'active', 
    message: 'Newsletter subscription service is running.' 
  }));
  return buildResponse(output);
}

// doPost function to handle form submissions
function doPost(e) {
  let responseData = { success: false, message: '' };
  
  try {
    // Log the incoming request for debugging
    Logger.log('Received request: ' + JSON.stringify(e));
    
    // Parse the incoming data
    let email = '';
    
    // The frontend sends data as 'application/x-www-form-urlencoded',
    // so we access parameters directly from e.parameter.
    if (e.parameter && e.parameter.email) {
      Logger.log('Processing form data: ' + e.parameter.email);
      email = e.parameter.email;
    } else {
      // Log the entire request if email is not found in the expected place for debugging.
      Logger.log('Email not found in e.parameter. Full request: ' + JSON.stringify(e));
      throw new Error('Email parameter was not found in the request.');
    }
    
    Logger.log('Extracted email: ' + email);
    
    // Validate email
    if (!email || !email.includes('@')) {
      throw new Error('Invalid or missing email address');
    }
    
    // Validate email format more thoroughly
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    
    // Open the spreadsheet
    const ss = SpreadsheetApp.openById('1xP6KOfwCigiPl6-sWkr_I60nhPyjOCeoMIodhuFL-fw');
    Logger.log('Opened spreadsheet');
    
    // Get sheet. First try a specific name, then fall back to the first sheet.
    let sheet = ss.getSheetByName('Subscribers');
    if (!sheet) {
      sheet = ss.getSheets()[0]; // Fallback to the very first sheet.
      if (sheet) {
        Logger.log('Warning: Sheet "Subscribers" not found. Falling back to the first sheet: ' + sheet.getName());
      }
    }
    
    if (!sheet) {
      throw new Error('Sheet not found. The spreadsheet appears to be empty.');
    }
    
    // Check for duplicate emails (starting from row 2 to skip header)
    const emailColumn = sheet.getRange('A:A').getValues();
    const existingEmails = emailColumn.map(row => row[0]).filter(cell => cell !== '');
    
    if (existingEmails.includes(email)) {
      Logger.log('Duplicate email found: ' + email);
      throw new Error('Email already subscribed to newsletter');
    }
    
    // Get the next available row (skip header row)
    const lastRow = sheet.getLastRow();
    const nextRow = lastRow < 1 ? 2 : lastRow + 1; // Start at row 2 if sheet is empty
    const timestamp = new Date();
    
    Logger.log('Adding email to row: ' + nextRow);
    
    // Save to spreadsheet
    sheet.getRange(nextRow, 1).setValue(email);
    sheet.getRange(nextRow, 2).setValue(timestamp);
    
    Logger.log('Successfully added email to sheet');
    
    // Send notification email
    const emailSubject = 'New Newsletter Subscriber';
    const emailBody = `
      <h2>New Subscriber Alert</h2>
      <p>A new subscriber has been added to your newsletter:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Time:</strong> ${timestamp.toString()}</li>
        <li><strong>Row:</strong> ${nextRow}</li>
      </ul>
    `;
    
    sendNewSubmissionEmailNotification(emailSubject, emailBody);
    Logger.log('Sent notification email to info@sgbigdata.com');
    
    responseData = { 
      success: true, 
      message: 'Subscription successful',
      email: email,
      row: nextRow
    };
    
  } catch (err) {
    Logger.log('Error occurred: ' + err.toString());
    
    // Handle errors
    const errorSubject = 'Error in Newsletter Subscription Form';
    const errorBody = `
      <h2>Error Alert</h2>
      <p><strong>Error details:</strong></p>
      <pre>${err.toString() || 'Unknown error'}</pre>
      <p><strong>Stack trace:</strong></p>
      <pre>${err.stack || 'No stack trace available'}</pre>
    `;
    
    try {
      sendNewSubmissionEmailNotification(errorSubject, errorBody);
    } catch (emailErr) {
      Logger.log('Failed to send error email: ' + emailErr.toString());
    }
    
    responseData = { success: false, message: err.toString() };
  }
  
  // Return response with CORS headers
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(responseData));
  return buildResponse(output);
}

// Helper function to add CORS headers
function buildResponse(output) {
  return output
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    .setHeader("Access-Control-Max-Age", "86400");
}