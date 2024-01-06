// @ts-check
import { test, expect } from "@playwright/test";
import { read } from "fs";

test("To navigate through to welcome page", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/The Reading Room/);

  // accessing email and password boxes
  const emailPlaceholder = "Your email address";
  const passwordPlaceholder = "Your password";
  const username = "jacobfield1996@gmail.com";
  const password = "ReadingRoom";

  // Use Playwright to locate the input element by placeholder
  await page.fill(
    `input[placeholder="${emailPlaceholder}"]`,
    "jacobfield1996@gmail.com"
  );
  await page.fill(`input[placeholder="${passwordPlaceholder}"]`, "ReadingRoom");

  // Click the login button
  const signInButton = await page.$('span:has-text("Sign in")');
  await signInButton.click();

  // Wait for the handleSignIn function to be available
  console.log("Before waitForFunction");
  // the below waitForFunction times out
  // await page.waitForFunction(() => typeof window.handleSignIn === "function");
  console.log("After waitForFunction"); // This never runs

  // Call the handleSignIn function
  // await page.evaluate(() => window.handleSignIn());

  // Wait for the navigation to the welcome page
  await page.waitForURL("http://localhost:3000/WelcomePage");

  // Verify that the URL is now the welcome page
  expect(page.url()).toBe("http://localhost:3000/WelcomePage");

  // Testing elements on welcome page
  const welcomeHeading = await page.getByRole("heading", {
    name: "Welcome back, Jacob",
  });
  // console.log(welcomeHeading);
  await expect(welcomeHeading).toHaveText("Welcome back, Jacob", {
    timeout: 10000,
  });

  //continue message test
  const continueMessage = await page.getByRole("heading", {
    name: "Grab your favourite book and let's dive into its world!",
  });
  await expect(continueMessage).toHaveText(
    "Grab your favourite book and let's dive into its world!"
  );

  // // testing latest reading note
  // const textContent1 = await page
  //   .locator("div")
  //   .filter({ hasText: "Last time you read Vita" })
  //   .nth(1);

  // await expect(textContent1).toHaveText(
  //   "Last time you read Vita Nostra by Maryna and Serhiy Dyachenko. You wrote: \"Incredible Slavic fantasy which surpasses a reader's concept of a novel.\" - keep going, you're doing great!"
  // );

  // navigate to reading room
  const readingRoomLink = page.getByRole("link").nth(2);
  readingRoomLink.click();
  await page.goto("http://localhost:3000/ReadingRoom");

  // Verify that the URL is now the Reading Room
  expect(page.url()).toBe("http://localhost:3000/ReadingRoom");

  // stopwatch tests
  const startButton = page.getByRole("button", { name: "Start" });
  startButton.click();
  await page.waitForTimeout(3000);
  const pauseButton = page.getByRole("button", { name: "Pause" });
  pauseButton.click();
  const timer2secs = page.getByText(":00:02");
  expect(timer2secs).toHaveText("00:00:02");

  // Adding Reading Notes Test
  const finishedReadingButton = page.getByRole("button", {
    name: "Finished Reading?",
  });
  finishedReadingButton.click();
  await page.waitForTimeout(1000);
  const popUpHeading = page.getByRole("heading", {
    name: "Fill out your thoughts 🎉",
  });
  expect(popUpHeading).toHaveText("Fill out your thoughts 🎉");

  let titleInput = "Mr Happy";
  let authorInput = "Roger Hargreaves";
  let ReadingNoteInput =
    "A lovely book with a strong message. It makes me feel happy!";

  const titleBox = page.getByPlaceholder("Title of the book you're");
  const authorBox = page.getByPlaceholder("Author of the book you're");
  const noteBox = page.getByPlaceholder("Share your favorite moments");

  await titleBox.fill(titleInput);
  await authorBox.fill(authorInput);
  await noteBox.fill(ReadingNoteInput);

  expect(titleBox).toHaveValue("Mr Happy");
  expect(authorBox).toHaveValue("Roger Hargreaves");
  expect(noteBox).toHaveValue(
    "A lovely book with a strong message. It makes me feel happy!"
  );

  const thumbsUpButton = page.getByRole("button", { name: "👍" });
  const thumbsDownButton = page.getByRole("button", { name: "👎" });
  const submitButton = page.getByRole("button", { name: "Submit" });

  await thumbsUpButton.click();
  await thumbsDownButton.click();
  await submitButton.click();

  // testing that the post request has been successful
  await page.waitForTimeout(4000);
  await page.goto("http://localhost:3000/WelcomePage");
  await expect(welcomeHeading).toHaveText("Welcome back, Jacob", {
    timeout: 10000,
  });

  const textContent2 = await page
    .locator("div")
    .filter({ hasText: "Last time you read Mr Happy" })
    .nth(1);

  await expect(textContent2).toHaveText(
    `Last time you read ${titleInput} by ${authorInput}. You wrote: "${ReadingNoteInput}" - keep going, you're doing great!`
  );
});
