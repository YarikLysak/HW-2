const $skillRange = $('#skill-range');

$skillRange.keypress(function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    const chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
});

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode); // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);// остальные
    }

    return null; // специальная клавиша
}

$('#add-skill-btn').click(function (ev) {
    ev.preventDefault();

    const $skillName = $('#skill-name');
    const $outputSkillBar = $('#skill-output');
    const $wrongSkillName = $('#wrongNameError');
    const $wrongSkillRange = $('#wrongNumberError');

    let $skillNameValue = $skillName.val();
    let $skillRangeValue = $skillRange.val();

    $wrongSkillName.removeClass('show-error');
    $wrongSkillRange.removeClass('show-error');


    if(checkLength($skillNameValue) && checkPoints($skillRangeValue)){
        $outputSkillBar.append(getOutputString($skillNameValue,$skillRangeValue));

    }else if(!checkLength($skillNameValue) && checkPoints($skillRangeValue)){
        $wrongSkillName.addClass('show-error');
    }else if(checkLength($skillNameValue) && !checkPoints($skillRangeValue)){
        $wrongSkillRange.addClass('show-error');
    } else{
        $wrongSkillName.addClass('show-error');
        $wrongSkillRange.addClass('show-error');
    }

    $skillName.val('');
    $skillRange.val('');
});

function checkLength($skillNameValue){
    return $skillNameValue.length >= 5;
}

function checkPoints($skillRangeValue){
    if(!isNaN($skillRangeValue)){
        return $skillRangeValue <= 100 && $skillRangeValue >= 1;
    }
}
function getOutputString($skillNameValue,$skillRangeValue){
    let outputString = '<div class="progress"><div class="progress-bar bg-green"';
    outputString += 'role="progressbar" aria-valuemin="0" aria-valuemax="100"';
    outputString += 'style="width:' + $skillRangeValue + '%"></div><div class="progress-name">';
    outputString += $skillNameValue + '</div>';
            return outputString;
}
