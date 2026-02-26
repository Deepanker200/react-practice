import React from 'react'

const HOC = (props) => {
    const { name } = props;
    return (
        <div> {name}</div>
    )
}

export const withHoc = (HOC) => {
    return (props) => {
        return (
            <>
            <div>
                Higher Order Component is
                <HOC {...props} />
            </div>
            </>
        )
    }
}

export default HOC