/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"cdn.sanity.io",
                // pathname: "https",
                // images:"/images//*"
            }
        ]
    }
};

export default nextConfig;
