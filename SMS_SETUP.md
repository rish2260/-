# SMS OTP Setup Instructions

## Overview
The website now includes real SMS OTP functionality for user registration. Users will receive actual OTP messages on their mobile phones.

## SMS Service Configuration

### Option 1: TextBelt (Free Tier)
- **Service**: TextBelt
- **URL**: https://textbelt.com/
- **Free Tier**: 1 SMS per day
- **Setup**: No API key required for free tier
- **Status**: Already configured in the code

### Option 2: SMS Magic (Recommended for Production)
- **Service**: SMS Magic
- **URL**: https://sms-magic.com/
- **Features**: Bulk SMS, OTP, transactional messages
- **Setup Required**:
  1. Sign up at SMS Magic
  2. Get your API key
  3. Update `SMS_API_KEY` in `user.html`

### Option 3: Other SMS Services
You can integrate with any SMS service by modifying the `sendOTPViaAlternative` function in `user.html`.

## Configuration Steps

### 1. Update SMS API Key
In `user.html`, find this line:
```javascript
const SMS_API_KEY = 'YOUR_SMS_API_KEY'; // Replace with actual API key
```
Replace `YOUR_SMS_API_KEY` with your actual API key.

### 2. Update Sender ID
In `user.html`, find this line:
```javascript
const SMS_SENDER_ID = 'ADITYA'; // Your sender ID
```
Replace `ADITYA` with your registered sender ID.

### 3. Test the Integration
1. Open `user.html`
2. Try registering with a real phone number
3. Check if OTP is received on the phone
4. Verify OTP verification works

## SMS Service Providers (India)

### Recommended Providers:
1. **SMS Magic** - Good for Indian numbers
2. **TextLocal** - Popular in India
3. **MSG91** - Reliable OTP service
4. **Fast2SMS** - Cost-effective

### Integration Example for TextLocal:
```javascript
const response = await fetch('https://api.textlocal.in/send/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apikey: 'YOUR_API_KEY',
    numbers: phoneNumber,
    message: message,
    sender: 'TXTLCL'
  })
});
```

## Features Implemented

### ✅ Real SMS OTP
- Sends actual SMS to user's phone
- 6-digit OTP generation
- 5-minute validity period
- Professional message format

### ✅ Fallback System
- Primary SMS service (TextBelt)
- Alternative SMS service (SMS Magic)
- Development fallback (shows OTP in alert)

### ✅ User Experience
- Loading status messages
- Success/error notifications
- Bilingual status messages
- Auto-hide notifications

### ✅ Security
- OTP expires after 5 minutes
- One-time use OTP
- Secure phone number validation
- Country code handling

## Testing

### Development Testing:
1. Use the fallback mode (shows OTP in alert)
2. Test with your own phone number
3. Verify OTP verification flow

### Production Testing:
1. Set up SMS service account
2. Configure API keys
3. Test with real phone numbers
4. Monitor SMS delivery rates

## Cost Considerations

### Free Options:
- TextBelt: 1 SMS/day free
- Some services offer free trial credits

### Paid Options:
- SMS Magic: ~₹0.15-0.25 per SMS
- TextLocal: ~₹0.20-0.30 per SMS
- MSG91: ~₹0.18-0.25 per SMS

## Troubleshooting

### Common Issues:
1. **OTP not received**: Check phone number format
2. **API errors**: Verify API key and sender ID
3. **Rate limiting**: Check SMS service limits
4. **Network issues**: Implement retry logic

### Debug Mode:
Add console logging to track SMS sending:
```javascript
console.log('Sending OTP to:', phoneNumber);
console.log('SMS Response:', result);
```

## Security Notes

1. **API Key Security**: Never expose API keys in client-side code
2. **Rate Limiting**: Implement rate limiting for OTP requests
3. **Phone Validation**: Validate phone numbers before sending
4. **OTP Expiry**: Ensure OTPs expire after reasonable time

## Next Steps

1. Choose and set up SMS service
2. Update API keys in the code
3. Test with real phone numbers
4. Monitor SMS delivery and costs
5. Implement rate limiting if needed
