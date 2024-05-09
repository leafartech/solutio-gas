'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function Team() {
    return (
        <div className="overflow-hidden">
            <Swiper
                // slidesPerView={3}
                spaceBetween={12}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 4
                    },
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper sm:max-w-7xl"
            >
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/1.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1080}
                                height={1072}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/2.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={810}
                                height={452}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/3.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={618}
                                height={263}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/4.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={374}
                                height={204}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/5.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1024}
                                height={465}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/6.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={421}
                                height={421}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/7.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={615}
                                height={394}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/8.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1600}
                                height={391}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/9.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={241}
                                height={138}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/10.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={160}
                                height={160}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/11.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={933}
                                height={708}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/12.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={357}
                                height={117}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/13.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={448}
                                height={180}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/14.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={299}
                                height={290}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/15.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={720}
                                height={249}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/16.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1182}
                                height={1182}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/17.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1277}
                                height={466}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/18.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={929}
                                height={370}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/19.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1220}
                                height={441}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/20.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1080}
                                height={1019}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/21.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={854}
                                height={312}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/22.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={932}
                                height={419}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/23.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1124}
                                height={226}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/24.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={950}
                                height={896}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/25.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={522}
                                height={233}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/26.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={924}
                                height={312}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/27.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={532}
                                height={485}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/28.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={492}
                                height={182}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}