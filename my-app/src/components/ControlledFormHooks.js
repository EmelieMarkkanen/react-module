import React, {useState} /*<- this imports the useState hook */ from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState(''); /* Hook properties and methods to update the state */
    const [category, setCategory] = useState('website')
    const [comments, setComments] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Fill out form:</h2>
                <div>
                    <label htmlFor='id-name'>Your name:</label>
                    <input value={name} /* name variable */
                        onChange={(e) => setName(e.target.value)} /* onChange method to update name variable */
                        id="id-name"
                        name='name'
                        type='text' />
                </div>
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        id='id-category'
                        name='category'>
                        <option value='website'>Website issue</option>
                        <option value='order'>Order issue</option>
                        <option value='general'>General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments:</label>
                    <textarea value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        id='id-comments'
                        name='comments' />
                </div>
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks