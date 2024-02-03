import { useState } from 'react'

function CounterComponent() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    This is the shared counter component!!
                </p>
            </div>
        </>
    )
}

export default CounterComponent
