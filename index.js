"use strict";

const entryCost = [0, 20, 40, 55, 70, 85, 110, 120, 130, 170, 180]
const winValue = [20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50]
const goldValue = 5;
const silverValue = 1;

function calculate(rank, wins, gold, silver) {
    var value = winValue[rank]
    var winP = 0;
    for (let i = 0; i < wins; i++) {
        winP += value;
        value += 5;
    }
    return winP + (gold * goldValue) + (silver * silverValue)       
}

$(document).ready(function () {
    $('#calculate').on('click', function(e) {
        const rank = $('#rank option:selected').val();
        const wins = $('#wins option:selected').val();
        const gold = $('#gold').val();
        const silver = $('#silver').val();
        if (gold === undefined || gold === null || gold === '') {
            alert("Missing value for Gold Medals");
            return;
        }
        if (silver === undefined || silver === null || silver === '') {
            alert("Missing value for Silver Medals");
            return;
        }
        if (gold < 0) {
            alert("Gold Medals must be non-negative")
            return;
        }
        if (silver < 0) {
            alert("Silver Medals must be non-negative")
            return;
        }

        const earned = calculate(rank, wins, gold, silver);
        const result = earned - entryCost[rank];

        $('#earned').text(`Points Earned: ${earned}p`);
        $('#result').text(`Result: ${result > 0 ? '+' : ''}${result}p`);
    });

    $('#rank').change(function() {
        $('#entry').text(`Entry Cost: ${entryCost[this.value]}p`);
    });
});
