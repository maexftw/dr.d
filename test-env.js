import 'dotenv/config';
console.log("Client ID:", process.env.NEXT_PUBLIC_TINA_CLIENT_ID ? "Found" : "Missing");
console.log("Token:", process.env.TINA_TOKEN ? "Found" : "Missing");
