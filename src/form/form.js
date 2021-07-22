import React from 'react'

export const Form = () => {
  const [isSubmited, setIsSubmited] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    setIsSubmited(true)
  }

  return (
    <>
      <h1>Form</h1>

      {isSubmited && <p>Success</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="string" name="name" />

        <label htmlFor="age">Age</label>
        <input id="age" type="string" name="age" />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
