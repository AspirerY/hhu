<%@ page contentType="text/html;charset=utf-8" %>
<html>
<head>
	<title>河海大学校园电子地图</title>
	<script src="js/react/react.min.js"></script>
	<script src="js/react/react-dom.min.js"></script>
	<script src="js/react/browser.min.js"></script>

	<link rel="stylesheet" href="https://openlayers.org/en/v4.3.1/css/ol.css" type="text/css">
    <!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
    <script src="https://openlayers.org/en/v4.3.1/build/ol.js"></script>
</head>
<body>
	<div id="reactDiv"></div>
</body>
	<script src="http://127.0.0.1:8888/exports/MainFrame.js"></script>
</html>