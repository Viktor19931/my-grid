
    function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.839683, 24.029717),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 49.839683, lng: 24.029717}
    });
    marker.addListener('click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }    
    }
}