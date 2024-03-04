"use client"

import Button from "@/components/Button"
import { useRouter } from "next/navigation"
import { useCallback, useRef } from "react"

const FormSearch = ({ buttonClass = "bg-[rgba(255,255,255,0.2)]", callbackFn }) => {
    const { push } = useRouter()
    const term = useRef("")

    const onSearch = useCallback(() => {
        callbackFn?.()
        push(`/result?term=${term.current}`)
    }, [callbackFn, push])

    return (
        <div className="flex flex-col gap-[15px]">
            <input placeholder="Artist / Album / Title" className="text-center py-3 rounded-3xl text-[12px] text-[#64748b]" onChange={(e) => {
                term.current = e.target.value
            }} />
            <Button className={`text-white ${buttonClass}`} onClick={onSearch}>
                Search
            </Button>
        </div>
    )
}

export default FormSearch