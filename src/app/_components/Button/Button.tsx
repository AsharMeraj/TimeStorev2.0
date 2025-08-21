import React from 'react'
type PropType = {
    name: string
}

const Button = ({children}:{children: React.ReactNode}) => {
  return (
    <button className="w-full uppercase active:scale-95 bg-[var(--primary)] text-white font-semibold px-[2rem] cursor-pointer py-[1rem]">{children}</button>
  )
}

export default Button