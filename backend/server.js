import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const ALLOY_API_BASE = 'https://sandbox.alloy.co/v1';
const ALLOY_TOKEN = process.env.ALLOY_WORKFLOW_TOKEN;
const ALLOY_SECRET = process.env.ALLOY_WORKFLOW_SECRET;

// Submit application to Alloy
app.post('/api/submit', async (req, res) => {
  try {
    const { firstName, lastName, email, dateOfBirth, ssn, addressLine1, 
            addressLine2, city, state, postalCode, country } = req.body;

    //
    const alloyPayload = {
      name_first: firstName,
      name_last: lastName,
      email_address: email,
      birth_date: dateOfBirth,
      document_ssn: ssn,
      address_line_1: addressLine1,
      address_line_2: addressLine2 || '',
      address_city: city,
      address_state: state,
      address_postal_code: postalCode,
      address_country_code: country || 'US'
    };

    //The format is workflow_token:workflow_secret
    const auth = Buffer.from(`${ALLOY_TOKEN}:${ALLOY_SECRET}`).toString('base64');
    
    //logging the payload to the console
    console.log('Sending to Alloy API:');
    console.log(JSON.stringify(alloyPayload, null, 2));
    
    //using Basic authentication for this assignment as stated
    const response = await fetch(`${ALLOY_API_BASE}/evaluations/`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alloyPayload)
    });

    const data = await response.json();
    
    //logging the response to the console
    console.log('Response from Alloy API:');
    console.log(JSON.stringify(data, null, 2));
    console.log('Outcome:', data?.summary?.outcome);
    
    if (!response.ok) {
      console.log('Error response:', data);
      return res.status(response.status).json({ error: data });
    }

    res.json({ outcome: data?.summary?.outcome, token: data.evaluation_token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  if (!ALLOY_TOKEN || !ALLOY_SECRET) {
    console.warn('check your credentials');
  }
});

