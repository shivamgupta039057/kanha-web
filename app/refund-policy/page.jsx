import RefundPolicy from '@/component/refundPolicy/RefundPolicy'
import SubHeader from '@/utils/SubHeader'
import React from 'react'

const page = () => {
    return (<>
        <SubHeader title="Refund Policy" subtitle="New Kanha Hotel" rating="5" />


        <RefundPolicy />
    </>
    )
}

export default page