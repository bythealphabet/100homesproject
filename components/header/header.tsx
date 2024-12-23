import Link from 'next/link';
import Image from 'next/image';
import s from './header.module.scss';
import { cva } from 'class-variance-authority';

const header = cva([s.header, 'base-grid']);
const dropdownMenu = cva([s.navLink, s.dropdownMenu]);

type NavigationLink = {
  label: string;
  href?: string;
  dropdown?: boolean;
  dropdownLinks?: string[];
};

const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', dropdown: true, dropdownLinks: ['Services 1', 'Services 2', 'Services 3'] },
  {
    label: 'Developments',
    dropdown: true,
    dropdownLinks: ['Developments 1', 'Developments 2', 'Developments 3', 'Developments 4'],
  },
  { label: 'Packages', dropdown: true, dropdownLinks: ['Packages 1', 'Packages 2'] },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className={header()}>
      <div className={s.logo}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 4000 4000"
          // style={{ enableBackground: 'new 0 0 4000 4000' }}
          xmlSpace="preserve"
        >
          <g>
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1A1A1A' }}
              d="M979.128,2048.981l751.436-768.911l715.305,749.361
		c-86.325,2.552-171.785,9.585-253.107,18.242l-8.091,0.869l-474.105-488.475l-465.982,496.048l-60.922,64.852
		c-70.158-15.373-141.927-37.597-202.512-70.865L979.128,2048.981z"
            />
            <path
              style={{ fill: 'none', stroke: '#332C2B', strokeWidth: 0.5669, strokeMiterlimit: 2.6131 }}
              d="M979.128,2048.981l751.436-768.911
		l715.305,749.361c-86.325,2.552-171.785,9.585-253.107,18.242l-8.091,0.869l-474.105-488.475l-465.982,496.048l-60.922,64.852
		c-70.158-15.373-141.927-37.597-202.512-70.865L979.128,2048.981z"
            />
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1A1A1A' }}
              d="M2129.721,1643.943l199.241-203.877l597.965,626.433
		l24.812,25.993c-86.225-30.757-179.683-48.44-275.735-57.156l-362.792-374.74l-83.127,88.489L2129.721,1643.943z"
            />
            <path
              style={{ fill: 'none', stroke: '#332C2B', strokeWidth: 0.5669, strokeMiterlimit: 2.6131 }}
              d="M2129.721,1643.943l199.241-203.877
		l597.965,626.433l24.812,25.993c-86.225-30.757-179.683-48.44-275.735-57.156l-362.792-374.74l-83.127,88.489L2129.721,1643.943z"
            />
            <polygon
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1A1A1A' }}
              points="1276.473,1446.141 1726.019,986.14 2165.116,1446.141 
		2016.434,1446.141 1715.324,1135.908 1423.889,1446.141 	"
            />
            <polygon
              style={{ fill: 'none', stroke: '#332C2B', strokeWidth: 0.5669, strokeMiterlimit: 2.6131 }}
              points="1276.473,1446.141 
		1726.019,986.14 2165.116,1446.141 2016.434,1446.141 1715.324,1135.908 1423.889,1446.141 	"
            />
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1A1A1A' }}
              d="M1611.023,1840.521h89.812v89.815h-89.812V1840.521z
		 M1611.023,1970.253h89.812v89.817h-89.812V1970.253z M1740.751,1970.253h89.815v89.817h-89.815V1970.253z M1740.751,1840.521
		h89.815v89.815h-89.815V1840.521z"
            />
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#1A1A1A' }}
              d="M3207.47,2695.302c0.378,46.598-14.781,94.82-46.898,134.368
		c-87.979,108.32-211.838,107.375-211.838,107.375c122.882-6.103,305.977-181.576,191.287-271.203
		c-130.257-101.793-222.114,159.278-251.007,195.717c-21.337,26.92-47.34,45.458-73.522,58.21
		c-64.333,31.328-129.746,27.723-129.746,27.723c130.44,59.797,238.681,75.018,326.82,62.083
		c226.13-33.16,319.908-251.65,316.767-378.113c-0.283-11.362-1.148-22.625-2.565-33.752c-3.865-30.345-11.835-59.702-23.277-87.387
		c-250.357-788.948-1554.468-267.911-2020.047-330.738c-15.378-2.158-30.993-4.568-46.74-7.257l-0.227-0.037l-0.203-0.033
		c-98.318-16.8-201.688-44.382-283.998-89.575c-85.695-47.065-158.928-122.928-159.76-224.068
		c-0.383-46.594,14.778-94.82,46.895-134.364c87.982-108.325,211.837-107.38,211.837-107.38
		c-122.877,6.108-305.972,181.577-191.287,271.208c130.262,101.788,222.113-159.278,251.013-195.718
		c21.335-26.923,47.338-45.458,73.522-58.213c64.332-31.328,129.747-27.729,129.747-27.729
		c-130.447-59.786-238.683-75.008-326.817-62.078c-226.138,33.165-319.918,251.655-316.771,378.118
		c0.278,11.361,1.143,22.62,2.565,33.752c3.86,30.34,11.83,59.702,23.268,87.392c250.37,788.938,1554.468,267.912,2020.058,330.731
		c15.378,2.16,30.987,4.573,46.738,7.257l0.222,0.033l0.208,0.038c98.32,16.795,201.69,44.38,283.998,89.575
		C3133.407,2518.302,3206.635,2594.167,3207.47,2695.302"
            />
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
              d="M2821.822,2564.399v216.638h-52.772v-129.922l-48.448,129.922h-42.587
		l-48.765-130.228v130.228h-52.767v-216.638h62.338l60.793,149.982l60.18-149.982H2821.822z M2410.765,2564.399v129.615
		c0,12.958,3.19,22.937,9.567,29.933c6.378,6.997,15.739,10.488,28.082,10.488c12.345,0,21.808-3.492,28.39-10.488
		c6.585-6.997,9.873-16.975,9.873-29.933v-129.615h52.777v129.302c0,19.343-4.115,35.693-12.345,49.068
		c-8.23,13.375-19.29,23.457-33.175,30.247c-13.89,6.789-29.367,10.185-46.445,10.185c-17.075,0-32.353-3.35-45.827-10.035
		c-13.475-6.685-24.123-16.762-31.937-30.24c-7.82-13.48-11.732-29.882-11.732-49.225v-129.302H2410.765z M2247.519,2783.2
		c-15.842,0-30.038-2.575-42.586-7.72c-12.552-5.14-22.582-12.755-30.09-22.833c-7.511-10.082-11.47-22.218-11.882-36.415h56.165
		c0.822,8.022,3.6,14.145,8.328,18.363c4.739,4.215,10.908,6.322,18.52,6.322c7.813,0,13.988-1.8,18.515-5.395
		c4.525-3.605,6.788-8.593,6.788-14.972c0-5.348-1.8-9.77-5.4-13.267c-3.6-3.5-8.021-6.378-13.265-8.64
		c-5.25-2.268-12.71-4.838-22.38-7.72c-13.99-4.318-25.404-8.636-34.252-12.96c-8.85-4.319-16.46-10.7-22.838-19.134
		c-6.378-8.433-9.567-19.442-9.567-33.023c0-20.16,7.303-35.948,21.912-47.367c14.608-11.42,33.638-17.127,57.09-17.127
		c23.866,0,43.1,5.707,57.713,17.127c14.603,11.418,22.421,27.312,23.452,47.678h-57.095c-0.41-6.992-2.98-12.497-7.715-16.511
		c-4.728-4.012-10.8-6.02-18.207-6.02c-6.378,0-11.518,1.701-15.427,5.093c-3.912,3.397-5.867,8.282-5.867,14.66
		c0,6.997,3.293,12.448,9.874,16.36c6.586,3.908,16.876,8.122,30.865,12.653c13.988,4.728,25.356,9.255,34.1,13.573
		c8.745,4.322,16.305,10.597,22.684,18.827c6.377,8.23,9.566,18.827,9.566,31.785c0,12.345-3.136,23.562-9.417,33.638
		c-6.273,10.082-15.377,18.103-27.312,24.07C2277.859,2780.216,2263.771,2783.2,2247.519,2783.2z M2058.037,2661.301
		c10.082,0,17.588-2.366,22.525-7.1c4.942-4.728,7.408-11.418,7.408-20.055c0-8.642-2.467-15.33-7.408-20.06
		c-4.937-4.733-12.444-7.1-22.525-7.1h-28.702v54.315H2058.037z M2141.669,2634.146c0,12.548-2.883,24.013-8.642,34.408
		c-5.763,10.388-14.608,18.77-26.542,25.147c-11.933,6.378-26.745,9.568-44.438,9.568h-32.712v77.768h-52.772v-216.638h85.483
		c17.282,0,31.89,2.982,43.823,8.948c11.935,5.967,20.883,14.197,26.85,24.69
		C2138.688,2608.529,2141.669,2620.562,2141.669,2634.146z M1938.297,2564.399v216.638h-52.772v-216.638H1938.297z
		 M1847.574,2564.399v216.638h-52.772v-129.922l-48.453,129.922h-42.587l-48.76-130.228v130.228h-52.772v-216.638h62.338
		l60.793,149.982l60.18-149.982H1847.574z M1488.046,2606.677v43.823h70.673v40.735h-70.673v47.521h79.933v42.28h-132.7v-216.638
		h132.7v42.278H1488.046z M1286.839,2661.921h32.717c9.665,0,16.922-2.372,21.755-7.102c4.833-4.733,7.252-11.418,7.252-20.06
		c0-8.23-2.418-14.712-7.252-19.44c-4.833-4.73-12.09-7.102-21.755-7.102h-32.717V2661.921z M1344.548,2781.037l-45.052-81.78
		h-12.657v81.78h-52.768v-216.638h88.57c17.073,0,31.63,2.982,43.667,8.948c12.033,5.967,21.038,14.145,27.005,24.533
		c5.962,10.393,8.948,21.963,8.948,34.72c0,14.4-4.068,27.26-12.19,38.575c-8.13,11.315-20.112,19.337-35.952,24.07l49.993,85.792
		H1344.548z M1093.969,2735.059c17.277,0,31.115-5.763,41.503-17.287c10.39-11.523,15.587-26.745,15.587-45.672
		c0-19.133-5.197-34.407-15.587-45.83c-10.389-11.415-24.227-17.127-41.503-17.127c-17.49,0-31.427,5.66-41.82,16.975
		c-10.39,11.32-15.582,26.645-15.582,45.982c0,19.135,5.192,34.408,15.582,45.828
		C1062.543,2729.347,1076.479,2735.059,1093.969,2735.059z M1093.969,2783.2c-20.372,0-39.042-4.738-56.013-14.197
		c-16.973-9.463-30.448-22.682-40.43-39.656c-9.973-16.97-14.963-36.057-14.963-57.247c0-21.188,4.99-40.218,14.963-57.093
		c9.982-16.867,23.457-30.033,40.43-39.497c16.972-9.467,35.642-14.197,56.013-14.197c20.367,0,39.033,4.73,56.008,14.197
		c16.975,9.463,30.345,22.63,40.12,39.497c9.773,16.875,14.655,35.905,14.655,57.093c0,21.19-4.933,40.277-14.812,57.247
		c-9.873,16.975-23.248,30.193-40.115,39.656C1132.956,2778.462,1114.336,2783.2,1093.969,2783.2z M2445.717,2828.007h-9.793v79.72
		h12.868v-56.259l45.213,56.259h9.68v-79.72h-12.757v56.717L2445.717,2828.007z M2340.042,2879.371h-33.71l16.856-37.927
		L2340.042,2879.371z M2352.344,2907.727h13.555l-35.765-79.72h-13.893l-35.76,79.72h13.555l7.517-16.743h43.162L2352.344,2907.727z
		 M2213.984,2838.14c-8.125-8.045-17.957-12.07-29.498-12.07c-13.058,0-23.31,4.082-30.747,12.24
		c-7.44,8.163-11.163,18.283-11.163,30.355c0,5.465,0.837,10.573,2.508,15.317c1.672,4.743,4.138,9.033,7.398,12.868
		c3.27,3.832,7.653,6.87,13.158,9.108c5.503,2.24,11.787,3.36,18.845,3.36c12.454,0,22.89-4.63,31.323-13.89v-32.688h-34.053v11.39
		h22.203v16.171c-5.617,4.707-12.108,7.063-19.473,7.063c-9.718,0-17.042-2.778-21.978-8.315c-4.937-5.547-7.403-12.34-7.403-20.385
		c-0.075-8.732,2.547-16.063,7.857-21.978c5.315-5.925,12.492-8.887,21.525-8.887c3.799,0,7.653,0.742,11.56,2.22
		c3.908,1.48,7.233,3.587,9.965,6.322L2213.984,2838.14z M2004.447,2868.434c0-8.953,2.485-16.243,7.46-21.865
		c4.975-5.617,11.938-8.428,20.897-8.428c6.152,0.075,11.41,1.654,15.775,4.73c4.365,3.075,7.479,6.812,9.34,11.215
		c1.857,4.403,2.787,9.188,2.787,14.348c0,8.352-2.352,15.322-7.058,20.9c-4.705,5.58-11.73,8.367-21.07,8.367
		c-4.707,0-8.902-0.85-12.587-2.56c-3.68-1.705-6.618-3.983-8.82-6.832c-2.202-2.843-3.855-5.957-4.957-9.335
		C2005.109,2875.591,2004.524,2872.081,2004.447,2868.434z M2032.804,2826.524c-11.995,0-21.827,3.93-29.495,11.787
		c-7.667,7.862-11.503,17.863-11.503,30.01c0,5.39,0.855,10.497,2.565,15.322c1.71,4.818,4.177,9.165,7.403,13.033
		c3.222,3.88,7.497,6.968,12.812,9.283c5.312,2.315,11.312,3.479,17.992,3.479c6.685,0,12.68-1.125,17.995-3.365
		c5.315-2.238,9.585-5.295,12.812-9.165c3.229-3.874,5.693-8.259,7.4-13.152c1.71-4.9,2.565-10.078,2.565-15.548
		c0-11.537-3.53-21.35-10.593-29.438C2055.694,2830.686,2045.711,2826.604,2032.804,2826.524z M1872.807,2828.007v79.72h54.778
		v-11.845h-42.023v-67.875H1872.807z M1795.946,2839.17c-5.622-8.961-15.53-13.441-29.727-13.441c-3.793,0-7.435,0.435-10.932,1.31
		c-3.492,0.873-6.757,2.182-9.793,3.93c-3.038,1.743-5.467,4.138-7.285,7.171c-1.825,3.043-2.737,6.533-2.737,10.479
		c0,3.265,0.587,6.17,1.768,8.711c1.175,2.547,2.655,4.617,4.44,6.208c1.782,1.592,4.12,2.958,7.002,4.102
		c2.887,1.138,5.642,2.011,8.253,2.616c2.622,0.61,5.755,1.138,9.397,1.597c6.383,0.832,11.372,2.22,14.982,4.153
		c3.605,1.937,5.405,4.918,5.405,8.943c0,3.113-1.04,5.712-3.128,7.8c-2.089,2.088-4.577,3.515-7.463,4.27
		c-2.883,0.757-6.072,1.138-9.563,1.138c-11.39,0-19.663-4.365-24.827-13.095l-9.567,6.378c6.528,12.07,17.957,18.108,34.275,18.108
		c5.925,0,11.258-0.78,16.002-2.338c4.748-1.555,8.768-4.233,12.072-8.027c3.302-3.8,4.955-8.542,4.955-14.235
		c0-4.251-0.855-7.918-2.56-10.99c-1.71-3.075-4.195-5.503-7.46-7.288c-3.265-1.787-6.567-3.133-9.907-4.045
		c-3.34-0.912-7.365-1.71-12.072-2.39c-6.302-0.912-11.107-2.165-14.408-3.757c-3.303-1.597-4.952-4.138-4.952-7.635
		c0-3.717,1.71-6.656,5.122-8.825c3.415-2.163,7.862-3.245,13.327-3.245c4.172,0.075,8.027,0.894,11.557,2.447
		c3.533,1.56,6.245,3.705,8.145,6.435L1795.946,2839.17z M1634.693,2839.619c4.937,0,8.692,1.465,11.277,4.39
		c2.58,2.92,3.873,6.358,3.873,10.303c0,4.025-1.293,7.404-3.873,10.138c-2.585,2.732-6.378,4.102-11.39,4.102h-24.255v-28.933
		H1634.693z M1664.989,2905.449l-23.805-26.537c7.365-1.063,12.812-3.893,16.345-8.485c3.53-4.592,5.297-10.04,5.297-16.342
		c0-7.133-2.49-13.267-7.465-18.392c-4.97-5.122-11.858-7.687-20.668-7.687c-4.097,0-10.285-0.02-18.563-0.056
		c-8.272-0.039-14.46-0.057-18.561-0.057v79.833h12.757v-27.559h16.852l24.26,27.559h14.92L1664.989,2905.449z M1506.929,2828.121
		v46.578c0,7.44-2.055,13.19-6.155,17.258c-4.097,4.058-9.412,5.9-15.94,5.517c-6.072-0.227-10.97-2.31-14.688-6.263
		c-3.723-3.945-5.58-9.45-5.58-16.511v-46.578h-12.647v46.578c0,10.78,3.137,19.172,9.397,25.172
		c6.265,5.995,14.102,9.108,23.518,9.335c10.1,0.378,18.41-2.448,24.94-8.485c6.528-6.038,9.793-14.707,9.793-26.021v-46.578
		H1506.929z M1309.918,2868.434c0-8.953,2.49-16.243,7.465-21.865c4.97-5.617,11.933-8.428,20.895-8.428
		c6.147,0.075,11.405,1.654,15.775,4.73c4.362,3.075,7.475,6.812,9.335,11.215c1.862,4.403,2.793,9.188,2.793,14.348
		c0,8.352-2.353,15.322-7.063,20.9c-4.705,5.58-11.732,8.367-21.067,8.367c-4.71,0-8.905-0.85-12.585-2.56
		c-3.682-1.705-6.623-3.983-8.825-6.832c-2.202-2.843-3.851-5.957-4.952-9.335
		C1310.584,2875.591,1309.998,2872.081,1309.918,2868.434z M1338.278,2826.524c-11.995,0-21.827,3.93-29.493,11.787
		c-7.673,7.862-11.505,17.863-11.505,30.01c0,5.39,0.85,10.497,2.562,15.322c1.71,4.818,4.175,9.165,7.402,13.033
		c3.228,3.88,7.498,6.968,12.813,9.283c5.315,2.315,11.315,3.479,17.995,3.479c6.68,0,12.677-1.125,17.992-3.365
		c5.318-2.238,9.585-5.295,12.817-9.165c3.222-3.874,5.693-8.259,7.398-13.152c1.71-4.9,2.56-10.078,2.56-15.548
		c0-11.537-3.528-21.35-10.587-29.438C1361.168,2830.686,1351.184,2826.604,1338.278,2826.524z M1177.601,2828.007h-15.152v0.572
		l30.752,46.465v32.683h12.755v-32.683l31.658-46.465v-0.572h-15.372l-22.663,35.187L1177.601,2828.007z M897.08,2740.302h69.128
		v40.735h-121.9v-216.638h52.772V2740.302z"
            />
          </g>
        </svg>
        {/* <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link> */}
      </div>
      <div className={s.menu}>
        <nav>
          <ul role="list" className={s.navLinks}>
            {navigationLinks.map((link) =>
              link.dropdown || link.href === undefined ? (
                <li className={s.navLinkItem} key={link.label}>
                  <div className={dropdownMenu()}>
                    <div className={s.dropdownTrigger}>
                      <button className={s.dropdownTriggerButton}>{link.label}</button>
                      <svg className={s.dropdownIcon} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.989502 1.70193L6.99991 7.71234L13.0103 1.70193L11.5961 0.28772L6.99991 4.88391L2.40372 0.28772L0.989502 1.70193Z" />
                      </svg>
                    </div>
                    <span className={s.underline}></span>
                    <ul className={s.navSubMenu} role="list">
                      {link.dropdownLinks?.map((sublink) => (
                        <li key={sublink}>
                          <Link className={s.navSubLink} href="/">
                            {sublink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li className={s.navLinkItem} key={link.href}>
                  <Link className={s.navLink} href={link.href}>
                    {link.label}
                  </Link>
                  <span className={s.underline}></span>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
