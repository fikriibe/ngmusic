"use client";

import Button from "@/components/Button";
import { useSearch } from "@/services/search";
import FormSearch from "@/template/FormSearch";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Modal from 'react-modal';

const Page = () => {
    const params = useSearchParams();
    const term = `${params.get("term")}`;
    const { result, loading, loadMore } = useSearch(term);
    const [show, setShow] = useState(false)

    const component = useCallback(
        (item) => (
            <div
                key={item.collectionId}
                className="flex px-[10px] py-3 rounded-[10px] bg-white gap-3"
                style={{
                    boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);",
                }}
            >
                <Image
                    src={item.artworkUrl100}
                    width={100}
                    height={100}
                    alt=""
                    className="rounded-[10px] w-[100px] h-[100px]"
                    objectFit="cover"
                />
                <div className="text-[#334155] flex flex-col flex-1">
                    <p className="text-[11px]">{item.artistName}</p>
                    <p className="text-[14px] mt-[5px] mb-auto">{item.collectionName}</p>

                    <div className="flex items-center">
                        <span className="text-white bg-[#10b981] rounded-xl px-2 py-1 min-w-[45px] text-[10px] grid place-items-center">
                            {item.primaryGenreName}
                        </span>
                        <p className="text-[#f5b014] text-[12px] font-medium ml-auto">
                            {item.currency}{" "}
                            {item.collectionPrice}
                        </p>
                    </div>
                </div>
            </div>
        ),
        []
    );

    const onClose = useCallback(() => setShow(false), [])

    return (
        <div className="bg-neutral-100 h-full">
            <header className="flex items-center bg-main h-[60px] px-[15px] sticky top-0">
                <Image src="/icon-menu.svg" alt="" width={14} height={14} />
                <Image
                    src="/logo-text.svg"
                    alt=""
                    width={72}
                    height={15}
                    className="mx-auto"
                />
                <div className="cursor-pointer" onClick={() => setShow(true)}>
                    <Image src="/icon-search.svg" alt="" width={14} height={14} />
                </div>

            </header>

            <p className="text-[14px] text-[#334155] text-center pt-[42px] pb-[38px] px-[15px]">
                Search result for :{" "}
                <span className="text-[18px] text-[#7b34dd] font-bold ">{term}</span>
            </p>

            <div className="flex flex-col gap-5 px-[15px]">
                {result.map((item) => component(item))}
                {loading ? (
                    Array(3)
                        .fill("")
                        .map((_, i) => (
                            <div
                                key={i}
                                className="animate-pulse h-[124px] rounded-lg bg-neutral-500 w-full"
                            />
                        ))
                ) : (
                    <Button
                        className=" bg-neutral-200 text-[#64748b] w-[120px] self-center"
                        onClick={loadMore}
                    >
                        Load More
                    </Button>
                )}
            </div>

            <Modal isOpen={show} style={customStyles}>
                <div className="self-end cursor-pointer" onClick={onClose}>
                    <Image src="/icon-x.svg" width={14} height={14} alt="" />
                </div>
                <div className="my-auto">
                    <p className="text-[20px] font-bold text-white text-center mb-[31px]">
                        Search
                    </p>
                    <FormSearch buttonClass="bg-main" callbackFn={onClose} />
                </div>

            </Modal>
        </div>
    );
};

const customStyles = {
    overlay: { backgroundColor: 'rgba(0,0,0,0.8)' },
    content: {
        border: 'none',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: "340px",
        height: "100%",
        width: '100%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default Page;
