const Section_3 = () => {
    const CardWork = ({ icon, title, description }) => {
        return (
            <div className="col-12 col-lg-4 ps-0 text-center text-lg-start ">
                {icon}
                <p className="s3_card_title">
                    {title}
                </p>
                <p className="s3_card_text">
                    {description}
                </p>
            </div>
        )
    }
    return (
        <div className="position-relative">

            <div className="rhombus"></div>
            <div className="container section_3">
                <div className="row justify-content-center ">
                    <div className="col-6">

                        <p className="s3_title">
                            How it works
                        </p>

                        <p className="s3_text">
                            It's so easy to sell your car with CashForCars!
                        </p>

                    </div>
                </div>

                <div className="row s3_cards">
                    <CardWork
                        title={'1. Enter Your Details'}
                        description={'It takes just a few minutes to complete a form providing us with details of your vehicle. Answer a few questions about your cars mileage, age, condition,  etc and fill in your personal details.'}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                            <rect y="0.5" width="64" height="64" rx="32" fill="#F7C548" />
                            <path d="M36.2188 26.125H40.7286L35.5156 20.912V25.4219C35.5156 25.8098 35.8308 26.125 36.2188 26.125Z" fill="#252851" />
                            <path d="M24.9688 44.5H39.0312C40.1944 44.5 41.1406 43.5538 41.1406 42.3906V27.5312H36.2188C35.0556 27.5312 34.1094 26.585 34.1094 25.4219V20.5H24.9688C23.8056 20.5 22.8594 21.4462 22.8594 22.6094V42.3906C22.8594 43.5538 23.8056 44.5 24.9688 44.5ZM29.1875 31.7969H36.2188C36.6074 31.7969 36.9219 32.1114 36.9219 32.5C36.9219 32.8886 36.6074 33.2031 36.2188 33.2031H29.1875C28.7989 33.2031 28.4844 32.8886 28.4844 32.5C28.4844 32.1114 28.7989 31.7969 29.1875 31.7969ZM29.1875 34.6094H36.2188C36.6074 34.6094 36.9219 34.9239 36.9219 35.3125C36.9219 35.7011 36.6074 36.0156 36.2188 36.0156H29.1875C28.7989 36.0156 28.4844 35.7011 28.4844 35.3125C28.4844 34.9239 28.7989 34.6094 29.1875 34.6094ZM29.1875 37.4219H36.2188C36.6074 37.4219 36.9219 37.7364 36.9219 38.125C36.9219 38.5136 36.6074 38.8281 36.2188 38.8281H29.1875C28.7989 38.8281 28.4844 38.5136 28.4844 38.125C28.4844 37.7364 28.7989 37.4219 29.1875 37.4219ZM26.375 31.7969C26.7633 31.7969 27.0781 32.1117 27.0781 32.5C27.0781 32.8883 26.7633 33.2031 26.375 33.2031C25.9867 33.2031 25.6719 32.8883 25.6719 32.5C25.6719 32.1117 25.9867 31.7969 26.375 31.7969ZM26.375 34.6094C26.7633 34.6094 27.0781 34.9242 27.0781 35.3125C27.0781 35.7008 26.7633 36.0156 26.375 36.0156C25.9867 36.0156 25.6719 35.7008 25.6719 35.3125C25.6719 34.9242 25.9867 34.6094 26.375 34.6094ZM26.375 37.4219C26.7633 37.4219 27.0781 37.7367 27.0781 38.125C27.0781 38.5133 26.7633 38.8281 26.375 38.8281C25.9867 38.8281 25.6719 38.5133 25.6719 38.125C25.6719 37.7367 25.9867 37.4219 26.375 37.4219Z" fill="#252851" />
                        </svg>
                        }
                    />

                    <CardWork
                        title={'2. Receive a Price'}
                        description={'We will contact you within 24hrs. If you are satisfied with our valuation we will arrange for you to meet at our premises or for a member of the CashForCars team to visit you.'}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                                <rect y="0.5" width="64" height="64" rx="32" fill="#F7C548" />
                                <path d="M24.4137 35.7864H21.4209C20.5163 35.7864 19.7803 36.5224 19.7803 37.427V44.8594C19.7803 45.764 20.5163 46.5 21.4209 46.5H24.4137C25.3183 46.5 26.0543 45.764 26.0543 44.8594V37.427C26.0543 36.5224 25.3183 35.7864 24.4137 35.7864Z" fill="#252851" />
                                <path d="M44.2182 37.4644C44.1882 36.3941 43.9907 35.7838 43.5776 35.4856C42.0708 34.3978 39.461 35.6778 37.8777 36.6405C38.2834 37.3435 38.5062 39.5013 36.9324 40.1586C35.9187 40.5819 35.8462 40.5935 32.0552 41.2054C31.6872 41.2646 31.3443 41.008 31.2865 40.6349C31.2286 40.2607 31.4787 39.9093 31.8453 39.8502C35.5544 39.2516 35.5544 39.2516 36.4234 38.8887C37.022 38.6386 36.8047 37.5825 36.7188 37.3344L34.5799 37.655C33.9438 37.7494 33.2898 37.6472 32.6887 37.3591C32.3651 37.204 31.8762 36.9698 31.043 37.0758C29.1736 37.3143 29.3713 37.4061 28.7184 37.7571C28.7238 37.7571 28.4547 37.8993 28.0675 37.8993H27.6949V44.8594C27.6949 45.0904 27.6746 45.1655 27.6802 45.1655C27.8278 45.1519 28.613 45.1581 28.7604 45.1779C28.8967 45.1779 35.0334 45.6797 35.5375 45.6797C37.2616 45.6797 38.9339 44.9172 40.0809 43.5893L43.3773 39.8227C43.9693 39.1122 44.2421 38.3149 44.2182 37.4644Z" fill="#252851" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.625 26.3203C41.625 30.6325 38.1169 34.1406 33.8047 34.1406C29.4926 34.1406 25.9844 30.6325 25.9844 26.3203C25.9844 22.0081 29.4925 18.5 33.8047 18.5C38.1169 18.5 41.625 22.0081 41.625 26.3203ZM31.0046 26.7317C31.1067 26.8423 31.2491 26.8975 31.432 26.8975H31.9359C31.9656 27.1357 31.9635 27.3547 31.9295 27.5545C31.8997 27.7544 31.8508 27.9414 31.7828 28.1158C31.719 28.2859 31.6425 28.4432 31.5532 28.5878C31.4639 28.7324 31.3746 28.8663 31.2853 28.9896C31.2258 29.0746 31.1747 29.1533 31.1322 29.2256C31.0897 29.2936 31.0535 29.3638 31.0238 29.4361C30.994 29.5041 30.9727 29.5764 30.96 29.6529C30.9472 29.7252 30.9409 29.8039 30.9409 29.8889C30.9409 30.1483 31.0216 30.3567 31.1832 30.514C31.3448 30.6713 31.5723 30.75 31.8657 30.75H36.1965C36.3794 30.75 36.5218 30.6883 36.6239 30.565C36.7302 30.4375 36.7833 30.2653 36.7833 30.0484C36.7833 29.8315 36.7302 29.6614 36.6239 29.5381C36.5218 29.4148 36.3794 29.3532 36.1965 29.3532H32.9436L32.9309 29.334C33.2073 28.9683 33.4071 28.5878 33.5304 28.1923C33.658 27.7969 33.7026 27.3653 33.6644 26.8975H35.3546C35.5417 26.8975 35.6863 26.8423 35.7883 26.7317C35.8904 26.6212 35.9414 26.4638 35.9414 26.2597C35.9414 26.0556 35.8904 25.8983 35.7883 25.7877C35.6863 25.6729 35.5417 25.6155 35.3546 25.6155H33.4284C33.4029 25.522 33.3795 25.4305 33.3582 25.3413L33.2944 25.0734C33.2774 24.9798 33.2625 24.8863 33.2498 24.7927C33.2413 24.6992 33.237 24.5971 33.237 24.4866C33.237 24.2952 33.2668 24.1209 33.3263 23.9636C33.3901 23.8062 33.4815 23.6723 33.6006 23.5617C33.7239 23.4512 33.8748 23.3661 34.0534 23.3066C34.232 23.2471 34.4404 23.2173 34.6785 23.2173C34.8358 23.2173 34.9719 23.2322 35.0867 23.2619C35.2015 23.2875 35.3036 23.3172 35.3929 23.3512C35.4822 23.381 35.5629 23.4108 35.6352 23.4405C35.7118 23.4661 35.7926 23.4788 35.8776 23.4788C35.9584 23.4788 36.0328 23.4639 36.1008 23.4342C36.1731 23.4044 36.2348 23.364 36.2858 23.313C36.3368 23.2577 36.3772 23.196 36.407 23.128C36.4368 23.0557 36.4516 22.9771 36.4516 22.892C36.4516 22.7687 36.4325 22.6645 36.3942 22.5795C36.356 22.4902 36.2986 22.4073 36.222 22.3307C36.1752 22.2839 36.1072 22.235 36.0179 22.184C35.9329 22.1287 35.8266 22.0798 35.699 22.0373C35.5757 21.9948 35.4311 21.9608 35.2653 21.9353C35.0995 21.9055 34.9145 21.8906 34.7104 21.8906C34.2129 21.8906 33.7664 21.9608 33.371 22.1011C32.9798 22.2414 32.646 22.4328 32.3696 22.6751C32.0974 22.9175 31.8891 23.2024 31.7445 23.5298C31.5999 23.8572 31.5277 24.2059 31.5277 24.5759C31.5277 24.7885 31.5468 24.9798 31.5851 25.1499C31.6233 25.3157 31.6595 25.4709 31.6935 25.6155H31.432C31.2491 25.6155 31.1067 25.6729 31.0046 25.7877C30.9026 25.8983 30.8516 26.0556 30.8516 26.2597C30.8516 26.4638 30.9026 26.6212 31.0046 26.7317Z" fill="#252851" />
                            </svg>
                        } />
                    <CardWork
                        title={' 3. Sell Your Car'}
                        description={' Once you have met a member of our team the whole process should be concluded within 15–20 minutes. We will pay you by draft cheque or transfer the money securely by Faster Payments there and then, with no fees.'}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                                <rect y="0.5" width="64" height="64" rx="32" fill="#F7C548" />
                                <path d="M38.375 37.4219H39.7812V40.2344H38.375V37.4219Z" fill="#252851" />
                                <path d="M41.8906 28.9844H39.7812V28.2812C39.7812 26.3428 38.204 24.7656 36.2656 24.7656H31.25V22.6094C31.25 21.4462 30.3038 20.5 29.1406 20.5H22.1094C20.9462 20.5 20 21.4462 20 22.6094V28.2812C20 30.2197 21.5772 31.7969 23.5156 31.7969H27.7344C29.6728 31.7969 31.25 30.2197 31.25 28.2812V26.1719H36.2656C37.4288 26.1719 38.375 27.1181 38.375 28.2812V28.9844H36.2656C35.1025 28.9844 34.1562 29.9306 34.1562 31.0938V42.3438C34.1562 43.5069 35.1025 44.5 36.2656 44.5H41.8906C43.0538 44.5 44 43.5069 44 42.3438V31.0938C44 29.9306 43.0538 28.9844 41.8906 28.9844ZM26.3281 27.5781H24.9219C23.7587 27.5781 22.8125 26.6319 22.8125 25.4688C22.8125 24.3056 23.7587 23.3594 24.9219 23.3594H26.3281C27.4913 23.3594 28.4375 24.3056 28.4375 25.4688C28.4375 26.6319 27.4913 27.5781 26.3281 27.5781ZM41.1875 40.9375C41.1875 41.3261 40.873 41.6406 40.4844 41.6406H37.6719C37.2832 41.6406 36.9688 41.3261 36.9688 40.9375C36.9688 40.7544 36.9688 32.202 36.9688 32.5C36.9688 32.1114 37.2832 31.7969 37.6719 31.7969H40.4844C40.873 31.7969 41.1875 32.1114 41.1875 32.5C41.1875 32.6831 41.1875 41.2355 41.1875 40.9375Z" fill="#252851" />
                                <path d="M38.375 33.2031H39.7812V36.0156H38.375V33.2031Z" fill="#252851" />
                                <path d="M23.5156 33.2031C23.2749 33.2031 23.0442 33.1656 22.8125 33.1321V40.9375C22.8125 41.09 22.862 41.2376 22.9533 41.3591L25.0626 44.2185C25.1952 44.3956 25.4039 44.5 25.625 44.5C25.8461 44.5 26.0548 44.3956 26.1874 44.2185L28.2967 41.3591C28.5068 41.0796 28.4787 40.6876 28.2315 40.4404L27.3224 39.5313L28.2315 38.6221C28.5062 38.3475 28.5062 37.9025 28.2315 37.6279L27.3224 36.7188L28.2315 35.8096C28.3634 35.6778 28.4375 35.4993 28.4375 35.3125V33.1321C28.2059 33.1656 27.9751 33.2031 27.7344 33.2031H23.5156Z" fill="#252851" />
                                <path d="M26.3281 24.7656H24.9219C24.5339 24.7656 24.2188 25.0808 24.2188 25.4688C24.2188 25.8567 24.5339 26.1719 24.9219 26.1719H26.3281C26.7161 26.1719 27.0312 25.8567 27.0312 25.4688C27.0312 25.0808 26.7161 24.7656 26.3281 24.7656Z" fill="#252851" />
                            </svg>
                        }
                    />

                </div>

            </div>
        </div>
    )
}
export default Section_3