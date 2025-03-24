# Crible Take Home Test

## Run the project

- Install the packages `npm i`
- Start the server: `npm start`
- Served up on `http://localhost:8080`

## Project commands

- Run tests `npm run test`
- Run TypeScript compiler `npm run build`

## Project Summary

### What didn't get done

I work full time as a Staff Frontend Engineer and have very limited time outside of work. I dedicated about 8 hours between coding, reading the challenge, coming up with questions about the challenge, and making decisions based on the answers outlined below. Here are the things I didn't have time to complete:

- The tests are very basic but they run/pass. I would need to setup my test environment fully so it would mount and excute the JS file.
- Clicking the folders in the contents viewer does not function. I have a solution in my head for it but ran out of time. Since the instructions said the `name` was considered unique, I would add that as an ID for the folder in the directory tree and have the folder contents use the parent folder id to handle updating the state of the selected folder.

### Questions I asked after receiving the coding challenge

- Timebox: The email says "completed project within one week" but is there a time limit I should be targeting?
  - I was instructed to use my best judgement.
- Since this is not a full stack position, should I be working under the assumption that I'm developing against an API contract using the Interface that's defined in step 6?
  - I was instructed to use my best judgement.
- I was thinking of using a JSON file with mock data to use for rendering the UI
  - I was instructed to use my best judgement.
- When the user clicks on the file, should it prompt them to download/view it in the browser or is this for browsing purposes only?
  - I was told this wasn't needed.
- Is there a set list of file extensions? The example shows "rtf" and "txt", but I wasn't sure if we're supporting other file extensions like PDF or images.
  - I was instructed to use my best judgement.
- Should the files/folders be rendered alphabetical regardless of their type or should they be sorted alphabetically with folders first and then display the files?
  - I was instructed to use my best judgement.
- Based on the Interface on step 6, it shows that "size" isn't optional which then would mean we should have size for the Folders. Should we be displaying size for both folders and files? The mockup only shows displaying size for files.
  - I was instructed to use my best judgement.
- Should the display table be sortable by the columns(Name, Size, Date)?
  - I was instructed to use my best judgement.
