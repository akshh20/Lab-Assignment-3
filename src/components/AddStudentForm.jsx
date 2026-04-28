import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
	const [name, setName] = useState('')
	const [score, setScore] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!name.trim() || score === '') return

		onAddStudent(name, score)
		setName('')
		setScore('')
	}

	return (
		<form className="add-student-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Student name"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Score"
				min="0"
				max="100"
				value={score}
				onChange={(event) => setScore(event.target.value)}
			/>
			<button type="submit">Add Student</button>
		</form>
	)
}

export default AddStudentForm
