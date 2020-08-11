import React from "react";

function Heading() {
	document.addEventListener(
		"DOMContentLoaded",
		() => {
			function animateSgv(id, delay, delayIncrement) {
				const logo = document.getElementById(id);
				const logoPaths = document.querySelectorAll(`#${id} path`);
				delay = delay;
				for (let i = 11; i < logoPaths.length; i++) {
					console.log(logoPaths[i].getTotalLength());
					logoPaths[i].style.strokeDasharray = logoPaths[
						i
					].getTotalLength();
					logoPaths[i].style.strokeDashoffset = logoPaths[
						i
					].getTotalLength();
					logoPaths[
						i
					].style.animation = `line-anim 2s ease forwards ${delay}s`;
					delay += delayIncrement;
				}
				logo.style.animation = `fill-logo 0.1s ease forwards ${delay}s`;
			}
			// Set the id of SVG, delay time in seconds to start animation and delay between each animation
			animateSgv("logo", 0, 0.2);
		},
		false
	);

	return (
		<div className="heading">
			<img
				className="profile-avatar"
				alt="Nima Zareian"
				src="https://lh3.googleusercontent.com/teIOxhMVpVZV4xEBkPQff9fDOA1fOABDy_cnJiMXtTny_P13xGlAco-fVDDSXLfzBiObW6vnMHzxSEjqU5hv7I0SE0LXKjOlVaUyX1mndljbl7KWRDQrCm-mUkGeBk2DZX-UqCnwbBxV2Yfvpsr9rPxdxwevhMYc-66bSENMVCv3ci2fn0y1dN-7HY9BYZpbGYuB2MlDnBXFt2e5EEtb9k4Ef6n-zVVXGpoKPeX2HvSxo3ylec-bn2Re580v_QbQ-_WanW-wuqu6j1G_vKAI4aKXUuoT7U16vVEv6XoIbVutuC2caygGj78oKmllOtX0XhI5CZHkXTjG_bFUFG61JhMIy8hnnCEN_qtPkmohOoFoDGwL15xrFzapdd1PYR4ECjmhSQaBHm6J44djMHIYF1bjj-5nTr8OtlH-tDskfRdq-RLgAUgXZLWL3ZN1FrXzEgdpl42pBDuDrBDvwMa9KdXLzpoeRqZT8xmqwWoJaNKemhnbOHBN-tRXpTjPqV6RSgkquKyfyH7xrtmUgHo3XXgc3_s6Zd2_BKNXruHDJzHSX8wchn0eb2-543dZX3kfk6SECGrgT0eWZKtm6YWWgQpIH15TWN_Sk6XV1xths_IrHW2f0b7IZT7p1f0-1IwmdgRids-YB-iqOm9Town348-Zudc4IvHHNgAMt1oMthEpCN2MPD_BIFZ303CGEQ=s937-no?authuser=0"
			/>
			<div>
				{/* <h1>Good evening,</h1>
				<h1>I'm Nima Zareian</h1> */}
				<svg
					id="logo"
					width="1440"
					height="1024"
					viewBox="0 0 1440 1024"
					// fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* <g clip-path="url(#clip0)"> */}
					<rect width="1440" height="1024" fill="white" />
					<rect
						x="-58"
						y="-48"
						width="1590"
						height="1135"
						fill="#283149"
					/>
					<mask
						id="path-2-outside-1"
						maskUnits="userSpaceOnUse"
						x="285.926"
						y="421.416"
						width="903"
						height="119"
						// fill="black"
					>
						<rect
							fill="white"
							x="285.926"
							y="421.416"
							width="903"
							height="119"
						/>
						<path d="M368.838 535H355.734L303.03 455.08V535H289.926V434.488H303.03L355.734 514.264V434.488H368.838V535Z" />
						<path d="M393.624 443.272C391.128 443.272 389.016 442.408 387.288 440.68C385.56 438.952 384.696 436.84 384.696 434.344C384.696 431.848 385.56 429.736 387.288 428.008C389.016 426.28 391.128 425.416 393.624 425.416C396.024 425.416 398.04 426.28 399.672 428.008C401.4 429.736 402.264 431.848 402.264 434.344C402.264 436.84 401.4 438.952 399.672 440.68C398.04 442.408 396.024 443.272 393.624 443.272ZM399.96 456.088V535H386.856V456.088H399.96Z" />
						<path d="M512.87 454.648C519.014 454.648 524.486 455.944 529.286 458.536C534.086 461.032 537.878 464.824 540.662 469.912C543.446 475 544.838 481.192 544.838 488.488V535H531.878V490.36C531.878 482.488 529.91 476.488 525.974 472.36C522.134 468.136 516.902 466.024 510.278 466.024C503.462 466.024 498.038 468.232 494.006 472.648C489.974 476.968 487.958 483.256 487.958 491.512V535H474.998V490.36C474.998 482.488 473.03 476.488 469.094 472.36C465.254 468.136 460.022 466.024 453.398 466.024C446.582 466.024 441.158 468.232 437.126 472.648C433.094 476.968 431.078 483.256 431.078 491.512V535H417.974V456.088H431.078V467.464C433.67 463.336 437.126 460.168 441.446 457.96C445.862 455.752 450.71 454.648 455.99 454.648C462.614 454.648 468.47 456.136 473.558 459.112C478.646 462.088 482.438 466.456 484.934 472.216C487.142 466.648 490.79 462.328 495.878 459.256C500.966 456.184 506.63 454.648 512.87 454.648Z" />
						<path d="M557.117 495.256C557.117 487.192 558.749 480.136 562.013 474.088C565.277 467.944 569.741 463.192 575.405 459.832C581.165 456.472 587.549 454.792 594.557 454.792C601.469 454.792 607.469 456.28 612.557 459.256C617.645 462.232 621.437 465.976 623.933 470.488V456.088H637.181V535H623.933V520.312C621.341 524.92 617.453 528.76 612.269 531.832C607.181 534.808 601.229 536.296 594.413 536.296C587.405 536.296 581.069 534.568 575.405 531.112C569.741 527.656 565.277 522.808 562.013 516.568C558.749 510.328 557.117 503.224 557.117 495.256ZM623.933 495.4C623.933 489.448 622.733 484.264 620.333 479.848C617.933 475.432 614.669 472.072 610.541 469.768C606.509 467.368 602.045 466.168 597.149 466.168C592.253 466.168 587.789 467.32 583.757 469.624C579.725 471.928 576.509 475.288 574.109 479.704C571.709 484.12 570.509 489.304 570.509 495.256C570.509 501.304 571.709 506.584 574.109 511.096C576.509 515.512 579.725 518.92 583.757 521.32C587.789 523.624 592.253 524.776 597.149 524.776C602.045 524.776 606.509 523.624 610.541 521.32C614.669 518.92 617.933 515.512 620.333 511.096C622.733 506.584 623.933 501.352 623.933 495.4Z" />
						<path d="M700.164 523.624H749.124V535H684.612V524.632L733.284 446.008H685.188V434.632H748.836V445L700.164 523.624Z" />
						<path d="M757.766 495.256C757.766 487.192 759.398 480.136 762.662 474.088C765.926 467.944 770.39 463.192 776.054 459.832C781.814 456.472 788.198 454.792 795.206 454.792C802.118 454.792 808.118 456.28 813.206 459.256C818.294 462.232 822.086 465.976 824.582 470.488V456.088H837.83V535H824.582V520.312C821.99 524.92 818.102 528.76 812.918 531.832C807.83 534.808 801.878 536.296 795.062 536.296C788.054 536.296 781.718 534.568 776.054 531.112C770.39 527.656 765.926 522.808 762.662 516.568C759.398 510.328 757.766 503.224 757.766 495.256ZM824.582 495.4C824.582 489.448 823.382 484.264 820.982 479.848C818.582 475.432 815.318 472.072 811.19 469.768C807.158 467.368 802.694 466.168 797.798 466.168C792.902 466.168 788.438 467.32 784.406 469.624C780.374 471.928 777.158 475.288 774.758 479.704C772.358 484.12 771.158 489.304 771.158 495.256C771.158 501.304 772.358 506.584 774.758 511.096C777.158 515.512 780.374 518.92 784.406 521.32C788.438 523.624 792.902 524.776 797.798 524.776C802.694 524.776 807.158 523.624 811.19 521.32C815.318 518.92 818.582 515.512 820.982 511.096C823.382 506.584 824.582 501.352 824.582 495.4Z" />
						<path d="M868.759 468.904C871.063 464.392 874.327 460.888 878.551 458.392C882.871 455.896 888.103 454.648 894.247 454.648V468.184H890.791C876.103 468.184 868.759 476.152 868.759 492.088V535H855.655V456.088H868.759V468.904Z" />
						<path d="M977.054 492.52C977.054 495.016 976.91 497.656 976.622 500.44H913.55C914.03 508.216 916.67 514.312 921.47 518.728C926.366 523.048 932.27 525.208 939.182 525.208C944.846 525.208 949.55 523.912 953.294 521.32C957.134 518.632 959.822 515.08 961.358 510.664H975.47C973.358 518.248 969.134 524.44 962.798 529.24C956.462 533.944 948.59 536.296 939.182 536.296C931.694 536.296 924.974 534.616 919.022 531.256C913.166 527.896 908.558 523.144 905.198 517C901.838 510.76 900.158 503.56 900.158 495.4C900.158 487.24 901.79 480.088 905.054 473.944C908.318 467.8 912.878 463.096 918.734 459.832C924.686 456.472 931.502 454.792 939.182 454.792C946.67 454.792 953.294 456.424 959.054 459.688C964.814 462.952 969.23 467.464 972.302 473.224C975.47 478.888 977.054 485.32 977.054 492.52ZM963.518 489.784C963.518 484.792 962.414 480.52 960.206 476.968C957.998 473.32 954.974 470.584 951.134 468.76C947.39 466.84 943.214 465.88 938.606 465.88C931.982 465.88 926.318 467.992 921.614 472.216C917.006 476.44 914.366 482.296 913.694 489.784H963.518Z" />
						<path d="M996.799 443.272C994.303 443.272 992.191 442.408 990.463 440.68C988.735 438.952 987.87 436.84 987.87 434.344C987.87 431.848 988.735 429.736 990.463 428.008C992.191 426.28 994.303 425.416 996.799 425.416C999.199 425.416 1001.21 426.28 1002.85 428.008C1004.57 429.736 1005.44 431.848 1005.44 434.344C1005.44 436.84 1004.57 438.952 1002.85 440.68C1001.21 442.408 999.199 443.272 996.799 443.272ZM1003.13 456.088V535H990.031V456.088H1003.13Z" />
						<path d="M1016.25 495.256C1016.25 487.192 1017.88 480.136 1021.15 474.088C1024.41 467.944 1028.88 463.192 1034.54 459.832C1040.3 456.472 1046.68 454.792 1053.69 454.792C1060.6 454.792 1066.6 456.28 1071.69 459.256C1076.78 462.232 1080.57 465.976 1083.07 470.488V456.088H1096.32V535H1083.07V520.312C1080.48 524.92 1076.59 528.76 1071.4 531.832C1066.32 534.808 1060.36 536.296 1053.55 536.296C1046.54 536.296 1040.2 534.568 1034.54 531.112C1028.88 527.656 1024.41 522.808 1021.15 516.568C1017.88 510.328 1016.25 503.224 1016.25 495.256ZM1083.07 495.4C1083.07 489.448 1081.87 484.264 1079.47 479.848C1077.07 475.432 1073.8 472.072 1069.68 469.768C1065.64 467.368 1061.18 466.168 1056.28 466.168C1051.39 466.168 1046.92 467.32 1042.89 469.624C1038.86 471.928 1035.64 475.288 1033.24 479.704C1030.84 484.12 1029.64 489.304 1029.64 495.256C1029.64 501.304 1030.84 506.584 1033.24 511.096C1035.64 515.512 1038.86 518.92 1042.89 521.32C1046.92 523.624 1051.39 524.776 1056.28 524.776C1061.18 524.776 1065.64 523.624 1069.68 521.32C1073.8 518.92 1077.07 515.512 1079.47 511.096C1081.87 506.584 1083.07 501.352 1083.07 495.4Z" />
						<path d="M1152.59 454.648C1162.19 454.648 1169.96 457.576 1175.92 463.432C1181.87 469.192 1184.84 477.544 1184.84 488.488V535H1171.88V490.36C1171.88 482.488 1169.92 476.488 1165.98 472.36C1162.04 468.136 1156.67 466.024 1149.85 466.024C1142.94 466.024 1137.42 468.184 1133.29 472.504C1129.26 476.824 1127.24 483.112 1127.24 491.368V535H1114.14V456.088H1127.24V467.32C1129.84 463.288 1133.34 460.168 1137.76 457.96C1142.27 455.752 1147.21 454.648 1152.59 454.648Z" />
					</mask>
					<path
						d="M368.838 535H355.734L303.03 455.08V535H289.926V434.488H303.03L355.734 514.264V434.488H368.838V535Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M393.624 443.272C391.128 443.272 389.016 442.408 387.288 440.68C385.56 438.952 384.696 436.84 384.696 434.344C384.696 431.848 385.56 429.736 387.288 428.008C389.016 426.28 391.128 425.416 393.624 425.416C396.024 425.416 398.04 426.28 399.672 428.008C401.4 429.736 402.264 431.848 402.264 434.344C402.264 436.84 401.4 438.952 399.672 440.68C398.04 442.408 396.024 443.272 393.624 443.272ZM399.96 456.088V535H386.856V456.088H399.96Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M512.87 454.648C519.014 454.648 524.486 455.944 529.286 458.536C534.086 461.032 537.878 464.824 540.662 469.912C543.446 475 544.838 481.192 544.838 488.488V535H531.878V490.36C531.878 482.488 529.91 476.488 525.974 472.36C522.134 468.136 516.902 466.024 510.278 466.024C503.462 466.024 498.038 468.232 494.006 472.648C489.974 476.968 487.958 483.256 487.958 491.512V535H474.998V490.36C474.998 482.488 473.03 476.488 469.094 472.36C465.254 468.136 460.022 466.024 453.398 466.024C446.582 466.024 441.158 468.232 437.126 472.648C433.094 476.968 431.078 483.256 431.078 491.512V535H417.974V456.088H431.078V467.464C433.67 463.336 437.126 460.168 441.446 457.96C445.862 455.752 450.71 454.648 455.99 454.648C462.614 454.648 468.47 456.136 473.558 459.112C478.646 462.088 482.438 466.456 484.934 472.216C487.142 466.648 490.79 462.328 495.878 459.256C500.966 456.184 506.63 454.648 512.87 454.648Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M557.117 495.256C557.117 487.192 558.749 480.136 562.013 474.088C565.277 467.944 569.741 463.192 575.405 459.832C581.165 456.472 587.549 454.792 594.557 454.792C601.469 454.792 607.469 456.28 612.557 459.256C617.645 462.232 621.437 465.976 623.933 470.488V456.088H637.181V535H623.933V520.312C621.341 524.92 617.453 528.76 612.269 531.832C607.181 534.808 601.229 536.296 594.413 536.296C587.405 536.296 581.069 534.568 575.405 531.112C569.741 527.656 565.277 522.808 562.013 516.568C558.749 510.328 557.117 503.224 557.117 495.256ZM623.933 495.4C623.933 489.448 622.733 484.264 620.333 479.848C617.933 475.432 614.669 472.072 610.541 469.768C606.509 467.368 602.045 466.168 597.149 466.168C592.253 466.168 587.789 467.32 583.757 469.624C579.725 471.928 576.509 475.288 574.109 479.704C571.709 484.12 570.509 489.304 570.509 495.256C570.509 501.304 571.709 506.584 574.109 511.096C576.509 515.512 579.725 518.92 583.757 521.32C587.789 523.624 592.253 524.776 597.149 524.776C602.045 524.776 606.509 523.624 610.541 521.32C614.669 518.92 617.933 515.512 620.333 511.096C622.733 506.584 623.933 501.352 623.933 495.4Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M700.164 523.624H749.124V535H684.612V524.632L733.284 446.008H685.188V434.632H748.836V445L700.164 523.624Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M757.766 495.256C757.766 487.192 759.398 480.136 762.662 474.088C765.926 467.944 770.39 463.192 776.054 459.832C781.814 456.472 788.198 454.792 795.206 454.792C802.118 454.792 808.118 456.28 813.206 459.256C818.294 462.232 822.086 465.976 824.582 470.488V456.088H837.83V535H824.582V520.312C821.99 524.92 818.102 528.76 812.918 531.832C807.83 534.808 801.878 536.296 795.062 536.296C788.054 536.296 781.718 534.568 776.054 531.112C770.39 527.656 765.926 522.808 762.662 516.568C759.398 510.328 757.766 503.224 757.766 495.256ZM824.582 495.4C824.582 489.448 823.382 484.264 820.982 479.848C818.582 475.432 815.318 472.072 811.19 469.768C807.158 467.368 802.694 466.168 797.798 466.168C792.902 466.168 788.438 467.32 784.406 469.624C780.374 471.928 777.158 475.288 774.758 479.704C772.358 484.12 771.158 489.304 771.158 495.256C771.158 501.304 772.358 506.584 774.758 511.096C777.158 515.512 780.374 518.92 784.406 521.32C788.438 523.624 792.902 524.776 797.798 524.776C802.694 524.776 807.158 523.624 811.19 521.32C815.318 518.92 818.582 515.512 820.982 511.096C823.382 506.584 824.582 501.352 824.582 495.4Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M868.759 468.904C871.063 464.392 874.327 460.888 878.551 458.392C882.871 455.896 888.103 454.648 894.247 454.648V468.184H890.791C876.103 468.184 868.759 476.152 868.759 492.088V535H855.655V456.088H868.759V468.904Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M977.054 492.52C977.054 495.016 976.91 497.656 976.622 500.44H913.55C914.03 508.216 916.67 514.312 921.47 518.728C926.366 523.048 932.27 525.208 939.182 525.208C944.846 525.208 949.55 523.912 953.294 521.32C957.134 518.632 959.822 515.08 961.358 510.664H975.47C973.358 518.248 969.134 524.44 962.798 529.24C956.462 533.944 948.59 536.296 939.182 536.296C931.694 536.296 924.974 534.616 919.022 531.256C913.166 527.896 908.558 523.144 905.198 517C901.838 510.76 900.158 503.56 900.158 495.4C900.158 487.24 901.79 480.088 905.054 473.944C908.318 467.8 912.878 463.096 918.734 459.832C924.686 456.472 931.502 454.792 939.182 454.792C946.67 454.792 953.294 456.424 959.054 459.688C964.814 462.952 969.23 467.464 972.302 473.224C975.47 478.888 977.054 485.32 977.054 492.52ZM963.518 489.784C963.518 484.792 962.414 480.52 960.206 476.968C957.998 473.32 954.974 470.584 951.134 468.76C947.39 466.84 943.214 465.88 938.606 465.88C931.982 465.88 926.318 467.992 921.614 472.216C917.006 476.44 914.366 482.296 913.694 489.784H963.518Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M996.799 443.272C994.303 443.272 992.191 442.408 990.463 440.68C988.735 438.952 987.87 436.84 987.87 434.344C987.87 431.848 988.735 429.736 990.463 428.008C992.191 426.28 994.303 425.416 996.799 425.416C999.199 425.416 1001.21 426.28 1002.85 428.008C1004.57 429.736 1005.44 431.848 1005.44 434.344C1005.44 436.84 1004.57 438.952 1002.85 440.68C1001.21 442.408 999.199 443.272 996.799 443.272ZM1003.13 456.088V535H990.031V456.088H1003.13Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M1016.25 495.256C1016.25 487.192 1017.88 480.136 1021.15 474.088C1024.41 467.944 1028.88 463.192 1034.54 459.832C1040.3 456.472 1046.68 454.792 1053.69 454.792C1060.6 454.792 1066.6 456.28 1071.69 459.256C1076.78 462.232 1080.57 465.976 1083.07 470.488V456.088H1096.32V535H1083.07V520.312C1080.48 524.92 1076.59 528.76 1071.4 531.832C1066.32 534.808 1060.36 536.296 1053.55 536.296C1046.54 536.296 1040.2 534.568 1034.54 531.112C1028.88 527.656 1024.41 522.808 1021.15 516.568C1017.88 510.328 1016.25 503.224 1016.25 495.256ZM1083.07 495.4C1083.07 489.448 1081.87 484.264 1079.47 479.848C1077.07 475.432 1073.8 472.072 1069.68 469.768C1065.64 467.368 1061.18 466.168 1056.28 466.168C1051.39 466.168 1046.92 467.32 1042.89 469.624C1038.86 471.928 1035.64 475.288 1033.24 479.704C1030.84 484.12 1029.64 489.304 1029.64 495.256C1029.64 501.304 1030.84 506.584 1033.24 511.096C1035.64 515.512 1038.86 518.92 1042.89 521.32C1046.92 523.624 1051.39 524.776 1056.28 524.776C1061.18 524.776 1065.64 523.624 1069.68 521.32C1073.8 518.92 1077.07 515.512 1079.47 511.096C1081.87 506.584 1083.07 501.352 1083.07 495.4Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					<path
						d="M1152.59 454.648C1162.19 454.648 1169.96 457.576 1175.92 463.432C1181.87 469.192 1184.84 477.544 1184.84 488.488V535H1171.88V490.36C1171.88 482.488 1169.92 476.488 1165.98 472.36C1162.04 468.136 1156.67 466.024 1149.85 466.024C1142.94 466.024 1137.42 468.184 1133.29 472.504C1129.26 476.824 1127.24 483.112 1127.24 491.368V535H1114.14V456.088H1127.24V467.32C1129.84 463.288 1133.34 460.168 1137.76 457.96C1142.27 455.752 1147.21 454.648 1152.59 454.648Z"
						stroke="white"
						strokeWidth="8"
						mask="url(#path-2-outside-1)"
					/>
					{/* </g> */}
					<defs>
						<clipPath id="clip0">
							<rect width="1440" height="1024" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
}

export default Heading;