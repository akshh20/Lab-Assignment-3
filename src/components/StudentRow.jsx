import { useEffect, useState } from 'react'

function StudentRow({ student, onScoreSave, onDeleteStudent }) {
	const [editableScore, setEditableScore] = useState(String(student.score))

	useEffect(() => {
		setEditableScore(String(student.score))
	}, [student.score])

	const isPassed = Number(student.score) >= 40

	const handleSave = () => {
		if (editableScore === '') return

		const numericScore = Number(editableScore)
		if (Number.isNaN(numericScore)) return

		onScoreSave(student.id, numericScore)
	}

	return (
		<tr>
			<td>{student.name}</td>
			<td>{student.score}</td>
			<td>
				<span className={isPassed ? 'status pass' : 'status fail'}>
					{isPassed ? 'Pass' : 'Fail'}
				</span>
			</td>
			<td>
				<div className="actions-cell">
					<input
						className="score-input"
						type="number"
						min="0"
						max="100"
						value={editableScore}
						onChange={(event) => setEditableScore(event.target.value)}
					/>
					<button className="save-btn" type="button" onClick={handleSave}>
						Save
					</button>
					<button
						className="delete-btn"
						type="button"
						onClick={() => onDeleteStudent(student.id)}
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	)
}

export default StudentRow
