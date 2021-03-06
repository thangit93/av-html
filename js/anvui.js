var x = 0, y = 0, man = 0, dsghechuyendi, ghechuyenve, tongtiendi, tongtienve, tongtien, thongtinchuyendi, promotionCode, isPromotion = false, promotionMoney = 0, promotionPercent = 0, isRead = 0;
$(document).ready(function () {
    var ticketPrice = 0, can_chon_ghe = !0, startPoint = "", endPoint = "", date = "", lang = 1;
    console.log(dsghechuyendi);
    const vn = {
        login: "Đăng nhập",
        search: "Tìm kiếm",
        lineTitle: "CÁC TUYẾN XE HIỆN CÓ",
        time: "THỜI GIAN",
        line: "TUYẾN ĐƯỜNG",
        startTo: "Xuất phát từ",
        from: "đến",
        datghe: "CHỌN GHẾ",
        cabinTitle: "Hình ảnh cabin",
        chuthich_dachon: "Ghế đang giữ chỗ",
        chuthich_chuachon: "Ghế trống",
        chuthich_banchon: "Ghế bạn chọn",
        tang1: "Tầng 1",
        tang2: "Tầng 2",
        vphn: "VP Hà Nội",
        driver: "Tài",
        door: "Cửa",
        assistant: "Phụ",
        customer_info: "Thông tin khách hàng",
        fullName: "Tên của bạn",
        phoneNumber: "Số điện thoại",
        numberMan: "Người lớn",
        numberBayby: "Trẻ em",
        paymentTitle: "Phương thức thanh toán",
        addhn: "110 Trần Nhật Duật Strest, Hoàn Kiếm District, Hà Nội, Việt Nam",
        vpsp: "VP Sapa",
        addsp: "Số 147 đường Thạch Sơn , thị trấn Sapa , Lào Cai",
        otherTour: "TOUR KHÁC",
        dattour: "Đặt Tour Theo Yêu Cầu",
        thuexe: "Thuê Xe",
        vemaybay: "Vé Máy Bay",
        visa: "Dịch Vụ Visa-Hộ Chiếu",
        datphong: "Đặt Phòng Khách Sạn",
        news: "Tin Tức & Sự Kiện",
        about: "Về Chúng Tôi",
        faq: "Câu Hỏi Thường Gặp",
        policy: "Chính Sách Bảo Mật",
        term: "Điều Khoản Sử Dụng",
    };

    const en = {
        login: "Login",
        search: "Search",
        lineTitle: "ALL ROUTE",
        time: "TIME",
        line: "LINE",
        startTo: "Start to",
        from: "from",
        datghe: "SELECT YOUR SEAT",
        cabinTitle: "Cabin Images",
        chuthich_dachon: "Unavailable",
        chuthich_chuachon: "Available",
        chuthich_banchon: "Selected",
        tang1: "Floor 1",
        tang2: "Floor 2",
        driver: "Driver",
        door: "Door",
        assistant: "Assistant",
        customer_info: "Customer Info",
        fullName: "Your Name",
        phoneNumber: "Phone",
        numberMan: "Adult",
        numberBayby: "Children",
        paymentTitle: "Payment Type",
        vphn: "Hanoi Office",
        addhn: "110 Tran Nhat Duat Street, Hoan Kiem District, Hanoi, Vietnam",
        vpsp: "Sapa Office",
        addsp: "No. 147 Thach Son Str. , Sapa Town , Lao Cai",
        otherTour: "OTHER TOURS",
        dattour: "Booking Request",
        thuexe: "Car Rental",
        vemaybay: "Air Ticket",
        visa: "Visa Services",
        datphong: "Hotel Accommodation",
        news: "News & Event",
        about: "About Us",
        faq: "FAQs",
        policy: "Privacy Policy",
        term: "Term & Condition",
    };


    $('#isRead').change(function () {
        if ($('#isRead').is(":checked")) {
            isRead = 1;
        } else {
            isRead = 0;
        }
    });

    $('#khuhoi').change(function () {
        if ($('#khuhoi').is(":checked")) {
            $('#thanhtoan').hide();
            $('#hoanthanhbtn').hide();
            $('#chonkhuhoi').show();
        } else {
            $('#thanhtoan').show();
            $('#hoanthanhbtn').show();
            $('#chonkhuhoi').hide();
        }
    });

    /*Chọn vé khứ hồi*/
    $('#chonkhuhoi').click(function () {
        if (ghedachon.length == 0) return alert("Hãy chọn ghế!"), !1;
        if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;

        var routeId = $("#routeId").val();

        var backRoute;

        dsghechuyendi = ghedachon;
        tongtiendi = x;

        thongtinchuyendi = {
            scheduleId: scheduleId,
            getInPointId: getInPointId,
            getOffPointId: getOffPointId,
            getInTime: getInTime,
            companyStatus: companyStatus,
            startDate: startDate,
            tripId: tripId
        };

        $('#ghechuyendispan').show();
        $('#ghechuyendi').text(dsghechuyendi);
        $('#khuhoi').attr('disabled', true);
        $('#divkhuhoi').show();

        $('#tienchuyendi').text(tongtiendi.format());

        switch (routeId) {
            case "R02fYyxpuGyyI": //hn-sp valentine
                $('.cus-btn').hide();
                backRoute = "R02AaSWQAWl25";
                break;
            case "R02AaV2rLPMly": //sp-hn
                $('.cus-btn').hide();
                backRoute = "R02AaVE2vdxy5";
                break;
            case "R02AaVE2vdxy5": //hn-sp
                $('.cus-btn').hide();
                backRoute = "R02AaV2rLPMly";
                break;
            case "R02AaSWQAWl25": //sp-hn valentine
                $('.cus-btn').hide();
                backRoute = "R02fYyxpuGyyI";
                break;
            case "R029a92ewoDKf": //hn-cb
                $('.cus-btn').hide();
                backRoute = "R029a8Q39FWIY";
                break;
            case "R029a8Q39FWIY": //cb-hn
                $('.cus-btn').hide();
                backRoute = "R029a92ewoDKf";
        }

        $("html, body").animate({
            scrollTop: $('.timchuyen').offset().top
        }, 1000);

        $('#'+backRoute).show();
        $("#routeId").val(backRoute);
        setPoint(backRoute);

        $('.datepicker').datepicker({
            show: true
        });
    });


    $("#vn").click(function () {
        lang = 1;
        changeLang(lang);
    });

    $("#en").click(function () {
        lang = 2;
        changeLang(lang);
    });


    var chuyenav = getParameterByName('chuyenav');
    startPoint = getParameterByName('startPoint');
    endPoint = getParameterByName('endPoint');
    date = getParameterByName('date');

    if (chuyenav !== '' && chuyenav !== null && startPoint !== '' && startPoint !== null && endPoint !== '' && endPoint !== null && date !== '' && date !== null) {
        setTimeout(function () {
            setPoint(chuyenav);

            setTimeout(function () {
                $("#startPoint").val(startPoint);
                $("#startPoint").change();
                $("#endPoint").val(endPoint);
                $("#endPoint").change();
                getChuyenDi(startPoint, endPoint, date, chuyenav);
            }, 1000);

        }, 500);

    }


    $(".listchuyen").hide();
    $('#phoneNumber').on("keypress", function (evt) {
        var keycode = evt.charCode || evt.keyCode;

        switch (keycode) {
            case 43:
            case 44:
            case 45:
            case 46:
                return false;
            default:
                return true;
        }
    });

    $('.datepicker').datepicker({
        format: "dd-mm-yyyy",
        // minDate: '-0d',
        autoclose: true
    }).datepicker("setDate", "0").on('changeDate',function(){
        var e = $("#startPoint").val(), t = $("#endPoint").val(), n = $(this).val(),
            a = $("#routeId").val();
        getChuyenDi(e, t, n, a);
    });


    $('#numberBayby').on("keypress", function (evt) {
        var keycode = evt.charCode || evt.keyCode;

        switch (keycode) {
            case 43:
            case 44:
            case 45:
            case 46:
                return false;
            default:
                return true;
        }
    });

    $.validator.addMethod('validatePhone', function (value, element) {
        var flag = false;
        var phone = element.value.trim();
        phone = phone.replace('(+84)', '0');
        phone = phone.replace('+84', '0');
        phone = phone.replace('0084', '0');
        phone = phone.replace(/ /g, '');
        if (phone != '') {
            var firstNumber = phone.substring(0, 2);
            if ((firstNumber == '09' || firstNumber == '08') && phone.length == 10) {
                if (phone.match(/^\d{10}/)) {
                    flag = true;
                }
            } else if (firstNumber == '01' && phone.length == 11) {
                if (phone.match(/^\d{11}/)) {
                    flag = true;
                }
            }
        } else {
            flag = true;
        }

        return flag;
    }, "Vui lòng nhập đúng định dạng số điện thoại");

    $('#form').validate({
        errorClass: 'error_border',
        rules: {
            contacterPhoneNumber: "validatePhone",
            phoneNumber: "validatePhone"
        },
    });

    var idAV = $("base").attr("id");

    $.ajax({
        type: "POST", url: "https://anvui.vn/chuyenAV", data: {idAV: idAV}, success: function (result) {
            var d = 0;
            $('#chuyenav').append('<div class="item text-center active" id="id' + d + '">');

            result.chuyen = $.grep(result.chuyen, function(v) {
                return v.routeId !== "R029a8Q39FWIY" && v.routeId !== "R029a92ewoDKf";
            });

            $("#loading").show(), $.each(result.chuyen, function (e, t) {

                if (result.chuyen.length > 6) {
                    $(".carousel-control").show();
                } else {
                    $(".carousel-control").hide();
                }

                if (e >= d + 6) {
                    d += 6;
                    if (d >= result.chuyen.length) {
                        d = result.chuyen.length - 1;
                    }
                    $('#chuyenav').append('<div class="item text-center" id="id' + d + '">');
                    $("#id" + d).append('<button type="button" class="d-inline cus-btn" id="' + t.routeId + '" value="' + t.routeId + '">' + t.routeName + '</button>');
                    $("#id" + d).append('<button type="button" class="d-inline cus-btn" value="' + t.routeId + '">' + t.routeName + '</button>');
                }
                else {
                    $("#id" + d).append('<button type="button" class="d-inline cus-btn" id="' + t.routeId + '" value="' + t.routeId + '">' + t.routeName + '</button>');

                }

            }), $(".cus-select").selectpicker("refresh");
            var t = result.chuyen[0].routeId;
            $("#routeId").val(t);
            $("#chuyenavInput").val(t);
            $(".cus-btn").click(function () {
                var t = $(this).val();
                $("#routeId").val(t);
                setPoint(t);
            });

            setPoint(t), $("#loading").hide();
        }
    });

    $("#chuyendoi").click(function () {
        var temp = $("#startPoint").val();
        $("#startPoint").val($("#endPoint").val());
        $("#startPoint").change();
        $("#endPoint").val(temp);
        $("#endPoint").change();
        return false;
    });

    $('#tieptuc').click(function () {
        location.reload();
    });

    //Kiểm tra khuyến mại
    $('#checkPromotion').click(function () {
        if($('#promotionCode').val() == '') {
           alert('Bạn chưa nhập khuyến mại');
            return false;
        }

        if(!isPromotion) {
            promotionCode = $('#promotionCode').val();
            $(this).prop('disabled', true);
            $.ajax({
                type: 'POST',
                url: 'https://dobody-anvui.appspot.com/web_promotion/check',
                beforeSend: function(request) {
                    request.setRequestHeader("DOBODY6969", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjowLCJkIjp7InVpZCI6IkFETTExMDk3Nzg4NTI0MTQ2MjIiLCJmdWxsTmFtZSI6IkFkbWluIHdlYiIsImF2YXRhciI6Imh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9kb2JvZHktZ29ub3cuYXBwc3BvdC5jb20vZGVmYXVsdC9pbWdwc2hfZnVsbHNpemUucG5nIn0sImlhdCI6MTQ5MjQ5MjA3NX0.PLipjLQLBZ-vfIWOFw1QAcGLPAXxAjpy4pRTPUozBpw');
                },
                data: {
                    timeZone: 7,
                    promotionCode: promotionCode,
                    companyId: idAV,
                    getInTimePlan:getInTime,
                },
                success: function (data) {
                    promotionPercent = data.results.result.percent;
                    promotionMoney = data.results.result.price;


                    if(promotionMoney > 0) {
                        $('#promotionCode').val('Giảm '+promotionMoney.format()+' VND');
                    } else if(promotionPercent > 0) {
                        $('#promotionCode').val('Giảm '+promotionPercent*100+' %');
                    }

                    $('#promotionCode').prop('readonly', true);
                    $('#checkPromotion').prop('disabled', false);

                    $('#checkPromotion').text('X');
                    $('#checkPromotion').removeClass('btn-info');
                    $('#checkPromotion').addClass('btn-danger');

                    if(dsghechuyendi !== undefined)
                    {
                        if(tongtien > 0) {
                            if(promotionMoney > 0) {
                                $('#priceneedpay').text((tongtien - promotionMoney).format()+' VND');
                            } else if (promotionPercent > 0) {
                                $('#priceneedpay').text((tongtien - tongtien*promotionPercent).format()+' VND');
                            }
                        }
                    } else {
                        if(x > 0) {
                            if(promotionMoney > 0) {
                                $('#priceneedpay').text((x - promotionMoney).format()+' VND');
                            } else if (promotionPercent > 0) {
                                $('#priceneedpay').text((x - x*promotionPercent).format()+' VND');
                            }
                        }
                    }



                    isPromotion = true;

                },
                error: function () {
                    alert('Mã khuyến mại không chính xác');
                    $('#checkPromotion').prop('disabled', false);
                }
            });
        } else {
            $('#checkPromotion').text('Kiểm tra');
            $('#checkPromotion').removeClass('btn-danger');
            $('#checkPromotion').addClass('btn-info');
            $('#promotionCode').val('');
            // $('#promotion').hide();
            $('#promotionCode').prop('readonly', false);

            promotionPercent = 0;
            promotionMoney = 0;
            if(dsghechuyendi !== undefined) {
                if(tongtien > 0) {
                    $('#priceneedpay').text(tongtien.format()+' VND');
                }
            } else {
                if(x > 0) {
                    $('#priceneedpay').text(x.format()+' VND');
                }
            }

            isPromotion = false;
        }

    });

    $("#TimChuyen").click(function () {
        var e = $("#startPoint").val(), t = $("#endPoint").val(), n = $("#datetimepicker").val(),
            a = $("#routeId").val();
        $(".datghe").hide();
        ("" == t || "" == e) && alert("Hãy chọn điểm đi và điểm đến"), getChuyenDi(e, t, n, a)
    });


    function setPoint(routeId) {
        $(".cus-btn").removeClass('chuyen_active');
        $("#" + routeId + "").addClass('chuyen_active');
        $.ajax({
            type: "POST", url: "https://anvui.vn/pointNX", data: {routeId: routeId}, success: function (e) {
                $("#startPoint").html(""), $("#endPoint").html(""), $.each(e.a1, function (e, t) {
                    var n = '<option value="' + t.pointId + '">' + t.pointName + "</option>";
                    $("#startPoint").append(n);
                    if(routeId == 'R02AaVE2vdxy5' || routeId == 'R02fYyxpuGyyI' || routeId == 'R029a92ewoDKf')
                    {
                        $('#startPoint').val('P00zEi0GvGQdl').change();
                    }

                }), $("#startPoint").selectpicker("refresh"), $.each(e.a2, function (e, t) {
                    var n = '<option value="' + t.pointId + '">' + t.pointName + "</option>";
                    $("#endPoint").append(n)
                }), $("#endPoint").selectpicker("refresh");
            }
        });


        setTimeout(function () {
            var startPoint = $("#startPoint").val();
            var endPoint = $("#endPoint").val();
            var date = $("#datetimepicker").val();
            getChuyenDi(startPoint, endPoint, date, routeId);
        }, 1000);


    }

    function getChuyenDi(e, t, n, a) {
        $("#loading").show();
        $.ajax({
            type: "POST",
            url: "https://anvui.vn/listSchedule",
            data: {startPoint: e, endPoint: t, timeStart: n, routeId: a},
            success: function (e) {
                $(".listchuyen").html(""), $(".listchuyen").show();
                // $("#form").hide();
                var t = !0;
                $.each(e, function (e, n) {

                    var price = n.ticketPrice1;

                    if (n.displayPrice !== 0) {
                        price = n.displayPrice;
                    }

                    var a = '<div id="chon_chuyen_' + e + '" onclick="javascript: chon_chuyen(' + e + ');" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 thumbnail" data-id="' + n.tripId + '" data-scheduleId="' + n.scheduleId + '" data-getInPointId="' + n.getInPointId + '" data-getOffPointId="' + n.getOffPointId + '" data-getInTime="' + n.getInTime + '" data-ticketPrice="' + n.ticketPrice + '" data-companyStatus="' + n.companyStatus + '" data-startDate="' + n.startDate + '">' +
                        '<div class="row text-center"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-9"><img class="img-responsive hide-xs logo-chuyen" width="100px" height="100px" alt="AN VUI" src="https://anvui.vn/themes/icon/iconChuyenXe.png"></div>' +
                        '<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">' +
                        '<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 thongtin"><div class="service-name"> ' + n.companyName + ' </div><div class="service-type">' + n.routeName + '</div></div>' +
                        '<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 thongtin"><div class="service-name time">  </div><div class="service-type">' + n.startTime + '</div></div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 thongtin"><div class="service-name line">  </div><div class="service-type"><span class="startTo"></span> ' + n.getInPointName + ' - <span class="from"></span> ' + n.getOffPointAddress + '</div></div>' +
                        '<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 thongtin text-right"><div class="price-vn"> <span style="color: #FF0000">' + price + '</span> VND </div></div>' +
                        '</div>' + // row 9
                        '</div>' + //row
                        '</div>';
                    $("#emptymes").hide();
                    $(".listchuyen").append(a), $("#bus-line").show(), $("#chonghe").hide(), $("#thongtin").hide(), t = !1
                }), $("#beginmes").hide(), t && ($("#chonghe").hide(), $("#thongtin").hide(), $("#emptymes").show()), $("#loading").hide(), changeLang(lang), $('.datghe').hide();
            }
        });
    }


    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }


    function changeLang(lang) {
        var a = '';
        if (lang == 1) {
            a = vn;
        } else {
            a = en;
        }
        $(".cus-login").html(a.login);
        $("#TimChuyen").html(a.search);
        $(".line-title").html(a.lineTitle);
        $(".time").html(a.time);
        $(".line").html(a.line);
        $(".startTo").html(a.startTo);
        $(".from").html(a.from);
        $("#datghe").html(a.datghe);
        $("#cabin-title").html(a.cabinTitle);
        $(".chuthich_dachon").html(a.chuthich_dachon);
        $(".chuthich_chuachon").html(a.chuthich_chuachon);
        $(".chuthich_banchon").html(a.chuthich_banchon);
        $(".tang1").html(a.tang1);
        $(".tang2").html(a.tang2);
        $(".driver").html(a.driver);
        $(".door").html(a.door);
        $(".assistant").html(a.assistant);
        $(".customer-info").html(a.customer_info);
        $(".fullName").html(a.fullName);
        $(".phoneNumber").html(a.phoneNumber);
        $(".numberMan").html(a.numberMan);
        $(".numberBayby").html(a.numberBayby);
        $(".payment-title").html(a.paymentTitle);
        $(".vphn").html(a.vphn);
        $(".vpsp").html(a.vpsp);
        $("#addhn").html(a.addhn);
        $("#addsp").html(a.addsp);
        $("#other-tour").html(a.otherTour);
        $("#dattour").html(a.dattour);
        $("#thuexe").html(a.thuexe);
        $("#vemaybay").html(a.vemaybay);
        $("#visa").html(a.visa);
        $("#datphong").html(a.datphong);
    }


});

function chon_chuyen(e) {
    var t = "#chon_chuyen_" + e;

    $(".thumbnail").removeClass("selected");

    $("#ghedachonspan").html('');
    $("#priceneedpay").html('0');
    $("#numberMan").val(0);
    $("#numberBayby").val(0);

    x = 0;
    y = 0;
    man = 0;

    $("#chon_chuyen_" + e).addClass("selected");

    if(dsghechuyendi !== undefined)
    {
        $('#thanhtoan').show();
        $('#hoanthanhbtn').show();
        $('#chonkhuhoi').hide();
        $('.chuthich_banchon').text('Ghế chuyến về');
    }



    if (ghedachon = [], tripId = $(t).attr("data-id"), scheduleId = $(t).attr("data-scheduleId"), getOffPointId = $(t).attr("data-getOffPointId"), getInPointId = $(t).attr("data-getInPointId"), getInTime = $(t).attr("data-getInTime"), ticketPrice = $(t).attr("data-ticketPrice"), companyStatus = $(t).attr("data-companyStatus"), startDate = $(t).attr("data-startDate"), 1 == companyStatus) return $("#goidien").show(), !1;
    $(".chuyendi").removeClass("selected"), $(this).addClass("selected"), $(".box-chonghe").html("<center>Loading...</center>"), $("#chonghe").show(), $("#thongtin").show();
    $.getJSON("https://anvui.vn/dat-ve-ssl?tripId=" + tripId + "&scheduleId=" + scheduleId, function (e) {
        $("#loading").show();

        seatMap = e.seatMap.seatList;
        for (var t = "", n = 1; n < e.seatMap.numberOfFloors + 1; n++) {
            t += '<div class="col-md-6 col-xs-10 tachtang"><div class="col-md-12 col-sm-12 col-xs-12 tang' + n + '">Tầng ' + n + "</div>";
            for (var a = 1; a < e.seatMap.numberOfRows + 1; a++) for (var i = 1; i < e.seatMap.numberOfColumns + 1; i++) coghe = !1, iddd = "", $.each(e.seatMap.seatList, function (d, o) {
                var h = o.seatId, c = h.replace(",", "_");
                var ticketStatus = 1;
                if(o.listTicketId.length > 0) {
                    var lastTicketId = o.listTicketId[o.listTicketCode.length - 1];
                }
                if(typeof lastTicketId !== 'undefined' && typeof o.ticketInfo !== 'undefined') {
                    ticketStatus = o.ticketInfo[lastTicketId].ticketStatus;
                } else {
                    ticketStatus = o.seatStatus;
                }

                c = c.split(' ').join('-');
                iddd = n + " " + a + " " + i, o.floor != n || o.row != a || o.column != i || (coghe = !0, t += 2 == o.seatType ?
                    '<div data-id="' + iddd + '" class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + '">' +
                    '<div class="chonghe chonghekodcchon driver" >Tài</div></div>' : 1 == o.seatType ?
                        '<div data-id="' + iddd + '" class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + '">' +
                        '<div class="chonghe chonghekodcchon door" >Cửa</div></div>' : 5 == o.seatType ?
                            '<div data-id="' + iddd + '" class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + '">' +
                            '<div class="chonghe chonghekodcchon" >WC</div></div>' : 6 == o.seatType ?
                                '<div data-id="' + iddd + '" class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + '">' +
                                '<div class="chonghe chonghekodcchon assistant" >Phụ</div></div>' : 1 == ticketStatus ?
                                    '<div data-id="' + iddd + '" class="col-xs-1 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '">' +
                                    '<div class="chonghe" id="chonghe_' + c + '" onclick="chonghe(\'' + h + "')\">" + h + "</div></div>" : 3 == ticketStatus ?
                                        '<div data-id="' + iddd + '"  class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '">' +
                                        '<div class="chonghe chonghedathanhtoan" >' + h + "</div></div>" : ((ticketStatus == 2 && (o.overTime > Date.now() || o.overTime == 0)) || ticketStatus == 7) ?
                                            '<div data-id="' + iddd + '"  class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '">' +
                                            '<div class="chonghe chonghekodcchon" >' + h + "</div></div>" : '<div data-id="' + iddd + '" class="col-xs-1 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '">' +
                                            '<div class="chonghe" id="chonghe_' + c + '" onclick="chonghe(\'' + h + "')\">" + h + "</div></div>");

            }), coghe || (t += '<div data-id="' + iddd + '"  class="col-xs-2 ghe_' + e.seatMap.numberOfColumns + ' kocoghe"> </div>');
            t += "</div>"
        }
        $(".box-chonghe").html(t), $("#loading").hide(), $(".datghe").show();

        $('html, body').animate({
            scrollTop: $(".datghe").offset().top
        }, 500);
    })
}

function checknumbaby(e) {
    if (man >= 0) {
        man = ghedachon.length - $("#numberBayby").val();
    }
    if (man < 0) {
        man = 0;
    }
    $("#numberMan").val(man);
    return e > ghedachon.length ? ($("#numberBayby").val(ghedachon.length), alert("Số trẻ em phải nhỏ hơn số ghế!"), !0) : !0
}

Number.prototype.format = function (e, t) {
    var n = "\\d(?=(\\d{" + (t || 3) + "})+" + (e > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~e)).replace(new RegExp(n, "g"), "$&,")
};

var seatMap;


function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].seatId === nameKey) {
            return myArray[i];
        }
    }
}

/*Hoàn thành đặt vé*/
function hoanthanh() {

    if(!isRead) {
        alert('Vui lòng đọc điều khoản trước khi đặt vé');
        return;
    }

    var mave;
    if(dsghechuyendi !== undefined){
        if(ghechuyenve.length !== dsghechuyendi.length)
        {
            return alert("Hãy chọn "+dsghechuyendi.length+" ghế");
        }
    }

    if (0 == ghedachon.length) return alert("Hãy chọn ghế!"), !1;
    if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
    var e = $("input[name=paymenttype]:checked").val(), t = $("#fullName").val(), n = $("#phoneNumber").val();
    if ("" == t) return alert("Hãy nhập tên!"), $("#fullName").focus(), !1;
    if ("" == n) return alert("Hãy nhập số điện thoại!"), $("#phoneNumber").focus(), !1;

    var lenght_requied = 0;

    switch (n.substring(0, 2)) {
        case "01" :
            lenght_requied = 11;
            break;
        case "09" :
        case "08" :
            lenght_requied = 10;
            break;
        default :
            return alert("Không đúng định dạng điện thoại!"), $("#phoneNumber").focus(), !1;

    }

    if (n.indexOf(".") !== -1 || n.indexOf(",") !== -1) return alert("Không đúng định dạng điện thoại!"), $("#phoneNumber").focus(), !1;

    if (n.length < lenght_requied || n.length > lenght_requied) return alert("Số điện thoại phải " + lenght_requied + " số"), $("#phoneNumber").focus(), !1;


    if ("" == tripId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getInPointId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getOffPointId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == scheduleId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getInTime) return alert("Thiếu dữ liệu!"), !1;
    if (0 == ticketPrice) return alert("Thiếu dữ liệu!"), !1;
    var a = $("#numberBayby").val();
    var man = $("#numberMan").val();

    $("#hoanthanhbtn").hide(), $("#loadingbtn").show();
    var paymentCode = generatePaymentCode();
    if(dsghechuyendi !== undefined)
    {
        $("#loading").show();
        // Chuyen di
        if(promotionMoney > 0) {
            kmdi = tongtiendi - promotionMoney;
            kmve = tongtienve - promotionMoney;
        } else if(promotionPercent > 0) {
            kmdi = tongtiendi - tongtiendi*promotionPercent;
            kmve = tongtienve - tongtienve*promotionPercent;
        } else {
            kmdi = tongtiendi;
            kmve = tongtienve;
        }

        tien = (kmdi+kmve) - ((kmdi+kmve)*10/100);

        console.log(kmdi);
        console.log(kmve);

        $.ajax({
            type: "POST",
            url: "https://anvui.vn/order-ssl",
            data: {
                listSeatId: JSON.stringify(dsghechuyendi),
                fullName: t,
                phoneNumber: n,
                getInPointId: thongtinchuyendi.getInPointId,
                startDate: thongtinchuyendi.startDate,
                getOffPointId: thongtinchuyendi.getOffPointId,
                scheduleId: thongtinchuyendi.scheduleId,
                getInTimePlan: thongtinchuyendi.getInTime,
                originalTicketPrice: tongtiendi,
                paymentTicketPrice: kmdi,
                agencyPrice: kmdi,
                paymentType: 1,
                paidMoney: 0,
                tripId: thongtinchuyendi.tripId,
                numberOfAdults: man,
                numberOfChildren: a,
                promotionId: promotionCode,
                paymentCode: paymentCode // Ma thanh toan
            },
            success: function (result) {

                if (200 != result.code) {
                    alert("Đã có lỗi xảy ra, hãy đặt lại!");
                    $("#hoanthanhbtn").show();
                    $("#loadingbtn").hide();
                }

                mave = result.results.ticketId;

                //Chuyen ve

                $.ajax({
                    type: "POST",
                    url: "https://anvui.vn/order-ssl",
                    data: {
                        listSeatId: JSON.stringify(ghechuyenve),
                        fullName: t,
                        phoneNumber: n,
                        getInPointId: getInPointId,
                        startDate: startDate,
                        getOffPointId: getOffPointId,
                        scheduleId: scheduleId,
                        getInTimePlan: getInTime,
                        originalTicketPrice: tongtienve,
                        paymentTicketPrice: kmve,
                        agencyPrice: kmve,
                        paymentType: 1,
                        paidMoney: 0,
                        tripId: tripId,
                        numberOfAdults: man,
                        numberOfChildren: a,
                        promotionId: promotionCode,
                        paymentCode: paymentCode // Ma thanh toan
                    },
                    success: function (t) {
                        if (200 != t.code) {
                            alert("Đã có lỗi xảy ra, hãy đặt lại!");
                            $("#hoanthanhbtn").show();
                            $("#loadingbtn").hide();
                        }
                        mave = mave + "-" + t.results.ticketId;
                        $("#datthanhcong").show(), $("#hoanthanhbtn").hide(), $("#loadingbtn").hide(), $("#gohomebtn").show();

                        if(e == 1){
                            setTimeout(function () {
                                $("#loading").hide();

                                var a = "https://dobody-anvui.appspot.com/interbuslines/dopay?vpc_OrderInfo="+mave+"&vpc_Amount=" + 100 * (tien)  + "&phoneNumber=" + n + "&packageName=web&paymentCode=" + paymentCode;
                                window.location.href = a
                            }, 1500);
                        }

                        if(e == 2) {
                            setTimeout(function () {
                                $("#loading").hide();
                                var a = "https://dobody-anvui.appspot.com/inter-payment/dopay?vpc_OrderInfo=" + mave + "&vpc_Amount=" + (100 * tien + ((tien * 0.03)*100 + 6500*100)) + "&phoneNumber=" + n + "&packageName=web&paymentCode=" + paymentCode;
                                window.location.href = a
                            }, 1500);
                        }
                    },
                    error: function () {
                        alert('Đã có lỗi xảy ra, vui lòng đặt lại')
                    }
                });
            },
            error: function () {
                alert('Đã có lỗi xảy ra, vui lòng đặt lại')
            }
        });
    } else {
        if(promotionMoney > 0) {
            km = x - promotionMoney;
        } else if(promotionPercent > 0) {
            km = x - x*promotionPercent;
        } else {
            km = x;
        }
        $.ajax({
            type: "POST",
            url: "https://anvui.vn/order-ssl",
            data: {
                listSeatId: JSON.stringify(ghedachon),
                fullName: t,
                phoneNumber: n,
                getInPointId: getInPointId,
                startDate: startDate,
                getOffPointId: getOffPointId,
                scheduleId: scheduleId,
                getInTimePlan: getInTime,
                originalTicketPrice: x,
                paymentTicketPrice: km,
                agencyPrice: km,
                paymentType: 1,
                paidMoney: 0,
                promotionId: promotionCode,
                tripId: tripId,
                numberOfAdults: man,
                numberOfChildren: a
            },
            success: function (t) {
                if ($("#loading").show(), 200 != t.code) alert("Đã có lỗi xảy ra, hãy đặt lại!"), $("#hoanthanhbtn").show(), $("#loadingbtn").hide(); else if (1 == e) {
                    setTimeout(function () {
                        var a = "https://dobody-anvui.appspot.com/interbuslines/dopay?vpc_OrderInfo=" + t.results.ticketId + "&vpc_Amount=" + 100 * km + "&phoneNumber=" + n + "&packageName=web";
                        window.location.href = a
                    }, 3000);

                } else if(e == 2) {
                    setTimeout(function () {
                        var a = "https://dobody-anvui.appspot.com/inter-payment/dopay?vpc_OrderInfo=" + t.results.ticketId + "&vpc_Amount=" + (100 * km + (km * 0.03)*100 + 6500*100) + "&phoneNumber=" + n + "&packageName=web";
                        window.location.href = a
                    }, 3000);
                }
                else $("#datthanhcong").show(), $("#hoanthanhbtn").hide(), $("#loadingbtn").hide(), $("#gohomebtn").show();
                setTimeout(function () {
                    $("#loading").hide();
                },1000);
            }
        });
    }

}

// Tạo mã thanh toán
function generatePaymentCode() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now();
}

function chonghe(e) {
    var t = e.replace(",", "_"), n = ghedachon.indexOf(e);

    seat = search(e, seatMap);

    if (seat.images[0] === undefined) {
        $(".img1").hide();
    } else {
        $(".img1").show();
        $("#img1").attr("src", seat.images[0]);
    }

    if (seat.images[1] === undefined) {
        $(".img2").hide();
    } else {
        $(".img2").show();
        $("#img2").attr("src", seat.images[1]);
    }

    if (seat.images[2] === undefined) {
        $(".img3").hide();
    } else {
        $(".img3").show();
        $("#img3").attr("src", seat.images[2]);
    }



    if (n > -1) $("#chonghe_" + t.split(' ').join('-')).removeClass("chonghechon"), ghedachon.splice(n, 1); else {
        if (ghedachon.length >= 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
        if(dsghechuyendi !== undefined){
            ghechuyenve = ghedachon;
            if(ghechuyenve.length >= dsghechuyendi.length)
            {
                return alert("Hãy chọn "+dsghechuyendi.length+" ghế");
            }
        }
        $("#chonghe_" + t.split(' ').join('-')).addClass("chonghechon"), ghedachon.push(e)
    }
    xacnhan(seat);
}

function xacnhan(seat) {
    var routeId = $("#routeId").val();
    if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
    var e = "";
    price = parseInt(ticketPrice) + parseInt(seat.extraPrice);
    if (ghedachon.length > y) {
        /*if(routeId == 'R029a92ewoDKf' || routeId == 'R029a8Q39FWIY')
        {
            x += parseInt(price - 30000);
        } else {*/
            x += price;
        // }

    }
    else {
       /* if(routeId == 'R029a92ewoDKf' || routeId == 'R029a8Q39FWIY')
        {
            x -= parseInt(price - 30000);
        } else {*/
            x -= price;
        // }
    }


    y = ghedachon.length;
    $.each(ghedachon, function (t, n) {
        e += n + ","
    }), $("#ghedachonspan").html(e), $(".xacnhanbtn").hide(), $("#thongtin").show();
    var t = $("#numberBayby").val(), n = ghedachon.length - t;
    0 > n && (n = 0, $("#numberBayby").val(ghedachon.length)), $("#numberMan").val(n);
    if(dsghechuyendi !== undefined) {
        tongtienve = x;
        tongtien = tongtiendi + tongtienve;
        tongtien = tongtien - (tongtien*10)/100;

        $('#tienchuyenve').text(tongtienve.format());
        if(promotionMoney > 0) {
            $('#priceneedpay').text((tongtien - promotionMoney).format()+' VND');
        } else if(promotionPercent > 0) {
            $('#priceneedpay').text((tongtien - tongtien*promotionPercent).format()+' VND');
        } else {

            $("#priceneedpay").text(tongtien.format());
        }
    }
    else {
        if(promotionMoney > 0) {
            $('#priceneedpay').text((x - promotionMoney).format()+' VND');
        } else if(promotionPercent > 0) {
            $('#priceneedpay').text((x - x*promotionPercent).format()+' VND');
        } else {
            $('#priceneedpay').text(x.format()+' VND');
        }
    }



}



