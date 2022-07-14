<?php include '../../assets/includes/header.php'; ?>
    <div class="timedate">
        <h1 class="time"><b><span id="hours"></span> <span id="separator">:</span> <span id="minutes"></span></b></h1>
        <h2 class="day_name"><span id="day_name"></span></h2>
        <h3 class="date"><span id="date"></span></h3>
    </div>
    <div class="weather">
        <div class="weather_today">
            <div class="w_left">
                <img src="../../assets/img/weather/clear-day.svg" width="100px" alt="" id="w_img">
            </div>
            <div class="w_right">
                <h1 id="w_temp">24°</h1>
                <h2 id="w_place">Tvrdošín</h2>
            </div>
        </div>
    </div>
    
<script src="../../assets/js/fetch_data.js"></script>
<?php include '../../assets/includes/footer.php'; ?>
