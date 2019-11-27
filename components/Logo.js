/** @jsx jsx */
import {useColorMode, Box} from '@chakra-ui/core';
import {jsx} from '@emotion/core';

const Logo = (props) => {
    const {colorMode} = useColorMode();

    return (
        <Box
            as="svg"
            height="6"
            mt={1}
            width="auto"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <svg width="300" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M.36 9.228c.182-1.5.639-2.702 1.371-3.604.733-.902 1.688-1.339 2.866-1.31.808.024 1.48.364 2.012 1.02L7.532.5h2.9L8.096 14H5.52l.123-1.028c-.71.832-1.497 1.236-2.365 1.213-.914-.012-1.632-.35-2.153-1.011-.516-.668-.791-1.562-.826-2.68-.012-.37 0-.73.035-1.082l.026-.184zm2.883.193a6.903 6.903 0 00-.061.984c0 .973.328 1.468.984 1.486.568.017 1.075-.255 1.52-.818l.65-3.647c-.192-.54-.58-.818-1.16-.835-.538-.012-.975.222-1.309.703-.328.475-.536 1.184-.624 2.127zM15.161 14c-.082-.229-.123-.516-.123-.861-.65.715-1.427 1.06-2.329 1.037-.826-.012-1.512-.287-2.057-.826a2.483 2.483 0 01-.764-1.96c.029-1.032.46-1.823 1.292-2.373.832-.557 1.968-.835 3.41-.835l.967.017.105-.536.035-.466c-.023-.533-.29-.808-.8-.826-.632-.012-1.022.337-1.168 1.046l-2.9.009c.028-.639.236-1.193.623-1.661.387-.475.911-.838 1.573-1.09a5.491 5.491 0 012.127-.36c.721.017 1.35.17 1.89.456.545.282.952.677 1.222 1.187.27.504.372 1.087.307 1.749l-.712 4.474-.044.545c-.023.433.033.802.167 1.107l-.008.167H15.16zm-1.652-1.916c.592.023 1.11-.237 1.556-.782l.29-1.53-.748-.008c-.462.011-.86.15-1.195.413-.334.258-.53.612-.589 1.063-.03.24.015.44.132.598.123.152.308.234.554.246zm9.87-2.268l2.46-5.326h3.191l-5.572 10.934c-.416.861-.896 1.482-1.441 1.863-.54.387-1.184.58-1.934.58-.334 0-.759-.064-1.274-.193l.22-2.118h.333c.358 0 .671-.059.94-.176.27-.111.496-.331.678-.66l.413-.79-1.52-9.44h2.987l.519 5.326zm5.124-.588c.182-1.5.639-2.702 1.371-3.604.732-.902 1.688-1.339 2.865-1.31.809.024 1.48.364 2.013 1.02L35.675.5h2.9L36.237 14h-2.575l.123-1.028c-.709.832-1.497 1.236-2.364 1.213-.914-.012-1.632-.35-2.153-1.011-.516-.668-.791-1.562-.827-2.68-.011-.37 0-.73.036-1.082l.026-.184zm2.883.193a6.922 6.922 0 00-.062.984c0 .973.328 1.468.985 1.486.568.017 1.075-.255 1.52-.818l.65-3.647c-.193-.54-.58-.818-1.16-.835-.539-.012-.975.222-1.31.703-.327.475-.535 1.184-.623 2.127zm13.42-2.25a8.27 8.27 0 00-.896-.088c-.867-.023-1.53.275-1.986.896L40.852 14H37.96l1.652-9.51 2.698-.009-.22 1.248c.622-.96 1.354-1.44 2.198-1.44.24 0 .54.04.897.122l-.378 2.76zM47.708 14h-2.9l1.652-9.51h2.9L47.707 14zm-.993-11.91a1.346 1.346 0 01.448-1.071 1.64 1.64 0 011.143-.431c.45 0 .826.129 1.125.387.304.257.463.594.474 1.01.012.434-.137.794-.448 1.081-.31.282-.691.422-1.143.422-.439 0-.814-.126-1.125-.378-.304-.257-.462-.597-.474-1.02zm7.119 2.391l-.202 1.143c.762-.902 1.679-1.342 2.75-1.318.88.017 1.533.345 1.96.984.434.633.593 1.541.475 2.725L57.814 14h-2.9l1.01-6.003c.024-.205.03-.393.018-.562-.04-.557-.369-.835-.984-.835-.51-.012-.976.213-1.398.676L52.374 14h-2.892l1.653-9.51 2.698-.009zm10.055 6.012l-1.055.914L62.385 14h-2.892L61.84.491h2.891l-1.335 7.207.351-.422 2.628-2.786h3.665l-4.043 4.043L68.45 14h-3.173l-1.388-3.507z"
                    fill={colorMode === 'light' ? '#2D3748' : '#fff'}
                />
            </svg>
        </Box>
    );
};

export default Logo;
