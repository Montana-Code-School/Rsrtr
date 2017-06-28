
<?php

if(!empty($_GET["location"]){

    $maps_url = ("http://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($_GET["location"]);

    $maps_json = file_get_contents($maps_url);
    $maps_array = json_decode($maps_json, true);

    $lat = $maps_array['results'][0]['geometry']['location']['lat'];
    $lng = $maps_array['results'][0]['geometry']['location']['lng'];

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>testRealm2</title>
</head>
<body>
  <form action="">
    <input type="text" name="location"/>
    <button type="submit">submit</button>
</body>
</html>
