import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd6630a85a6f95baea04f086f3268d9a7d00b5b49', queries,  });
export default client;
  