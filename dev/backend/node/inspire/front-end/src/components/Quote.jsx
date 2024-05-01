import React, { useState, useEffect } from "react"

export default function Quote(props) {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        async function loadQuote() {
            const response = await fetch(`http://localhost:3001/quotes/${props.id}`)
            const quoteData = await response.json()
            setQuote(quoteData)
        }

        loadQuote();
    }, [props.id]);


    return (
        <section>
            <div className="container mx-auto p-6">
               <div className="border-zinc-200 border-[0.5px] p-6 rounded">
                    <blockquote cite={quote.author} className="">
                        <q>{quote.text}</q>
                        <address>{quote.author}</address>
                    </blockquote>

                    <label className="border-stone-200 border-[0.5px] rounded-full py-1 px-2">{quote.category}</label>
               </div>
            </div>
        </section>
    );
}