# Student Scoreboard

A React + Vite student scoreboard app built with functional components and pure CSS.

## Features

- Add students with a name and score
- Edit a student score and save it
- Delete students from the table
- Pass/Fail status based on score
- Pure CSS styling, no external UI libraries

## Tech Stack

- React
- Vite
- JavaScript (JSX)
- CSS

## Project Structure

```text
src/
	App.jsx
	App.css
	components/
		Header.jsx
		StudentTable.jsx
		StudentRow.jsx
		AddStudentForm.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- Pass if score is greater than or equal to 40
- Fail if score is below 40
- Student data is managed in the parent `App` component
