"use client"

import { useCallback, useEffect, useRef, useState } from "react";

const { default: axios } = require("axios");

export function useSearch(term = "") {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const limit = useRef(10)

    const search = useCallback((term) => {
        setLoading(true)
        axios.get(
            "https://itunes.apple.com/search",
            { headers: { Accept: 'application/json' }, params: { term, limit: limit.current } }
        )
            .then(res => setResult(res.data.results))
            .finally(() => setLoading(false))
    }
        , [])

    const loadMore = useCallback(() => {
        limit.current += 10
        search(term)
    }, [])

    useEffect(() => {
        limit.current = 10
        search(term)
    }, [search, term])

    return { result, loading, loadMore }
}