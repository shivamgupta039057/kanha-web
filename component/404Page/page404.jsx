import React from 'react';
import Link from 'next/link';

const Page404 = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="section-padding page-404">
                        <div class="text-wrapper">
                            <h1 class="text-custom-white">ouch!</h1>
                            <h6 class="text-custom-white">sorry the page you are looking for does not exist</h6>
                            <Link href="/" className="btn-first btn-submit">Back to Home</Link> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;