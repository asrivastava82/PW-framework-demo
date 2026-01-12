import fs from "fs";
import path from "path";

function readFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File at path ${filePath} does not exist.`);
  }
  return fs.readFileSync(filePath, "utf-8");
}

function writeFile(filePath: string, data: string) {
  try {
    fs.writeFileSync(filePath, data);
  } catch (err) {
    throw new Error(`Error writing to file at path ${filePath}: ${err}`);
  }
}

function getSessionId(): string | undefined {
  const authPath = path.join(__dirname, "../auth/auth.json");
  const storageState = JSON.parse(fs.readFileSync(authPath, "utf-8"));

  const sessionCookie = storageState.cookies.find(
    (cookie: any) => cookie.name === "JSESSIONID"
  );

  return sessionCookie?.value;
}

export { readFile, writeFile, getSessionId };
