<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script src="js/velha.js" type="text/javascript"></script>
<link href="css/smoothness/jquery-ui-1.8.7.custom.css" type="text/css" rel="stylesheet" /> 
<script src="js/jquery-1.4.4.min.js" type="text/javascript" ></script>
<script src="js/jquery-ui-1.8.7.custom.min.js" type="text/javascript"></script>
</head>
<style>


        div.chess {
            width: 600px;
            height: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -300px;
            margin-left: -300px;
            
        }

        div.square {
           background-color: #abc;
		   width: 198px;
            height: 198px;
            border: solid black 1px;
            display: inline;
            float: left;
            color: #ffffff;
            font-family:sans-serif;
            font-size: 185px;
			cursor:pointer;
			
        }
		table{
			  width: 320px;
           
		}
  </style>

<body>

<table>
<tr><td>
<div id="tabs">
<ul>
	<li><a href="tab-1">STATUS</a></li>
    <li><a href="tab-2">RANK</a></li>
    <li><a href="tab-3">TROPHY</a></li>
</ul>
<div id="tab-1"></div>
<div id="tab-2"></div>
</div>
</td></tr>

   <div class="chess">
          <div class="square" id="0"></div>
          <div class="square" id="1"></div>
          <div class="square" id="2"></div>
                <div class="line"></div>
          <div class="square" id="3"></div>
          <div class="square" id="4"></div>
          <div class="square" id="5"></div>
                <div class="line"></div>
          <div class="square" id="6"></div>
          <div class="square" id="7"></div>
          <div class="square" id="8"></div>
      </div>

</body>
</html>