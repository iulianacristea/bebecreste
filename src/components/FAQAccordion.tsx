"use client";

import { useId, useState } from "react";

export type FAQAccordionItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQAccordionItem[];
  className?: string;
};

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`grid gap-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-lg shadow-slate-100/70 transition duration-200 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/35"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIndex((currentIndex) =>
                    currentIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold leading-6 text-slate-950 transition duration-200 hover:bg-rose-50/40 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-rose-100 sm:text-lg"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-xl font-bold text-slate-700 ring-1 ring-slate-100 transition duration-200 ${
                    isOpen ? "rotate-45 bg-rose-50 text-rose-700" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
