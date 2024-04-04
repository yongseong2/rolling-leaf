const { db } = require("@vercel/postgres");

async function seedDatabase(client) {
  try {
    // 확장 기능 활성화
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // 사용자 테이블 생성
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR PRIMARY KEY,
        image TEXT NOT NULL,
        name VARCHAR(255) NOT NULL
      );
    `;

    // 글 테이블 생성
    await client.sql`
      CREATE TABLE IF NOT EXISTS leafs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        leaf_type TEXT NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        name VARCHAR(255) NOT NULL,
        is_anonymous BOOLEAN NOT NULL
      );
    `;
  } catch (error) {
    console.error("Error initializing the database:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedDatabase(client);
  await client.end();
}

main().catch(err => {
  console.error("An error occurred while setting up the database:", err);
});
