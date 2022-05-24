import React, { useState } from 'react'


export function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const tutors = [
        { name: "james ", subject: "math" },
        { name: "mark", subject: "science" },
        { name: "john", subject: "english" },
        { name: "sarah", subject: "history" },
        { name: "Anna", subject: "coding" },

    ];
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        tutors.filter((tutor) => {
            return tutor.name.match(searchInput);
        });
    }
    return <div>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}
                value={searchInput} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <table>
            {tutors.map((tutor, index) => {
                <div>
                    <tr>
                        <td>{tutor.name}</td>
                        <td>{tutor.subject}</td>
                    </tr>
                </div>
            })}
        </table>
    </div>
};
