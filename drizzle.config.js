
export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx", 
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://regai_owner:BLn3xjMOtPW5@ep-tiny-butterfly-a59aj8wo.us-east-2.aws.neon.tech/regai?sslmode=require",
    connectionString:
      "postgresql://regai_owner:BLn3xjMOtPW5@ep-tiny-butterfly-a59aj8wo.us-east-2.aws.neon.tech/regai?sslmode=require",
  },
};