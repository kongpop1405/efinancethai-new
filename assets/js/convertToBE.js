// convertToBE.js

// ฟังก์ชั่นแปลงวันที่จาก ค.ศ. เป็น พ.ศ.
function convertToBE(inDate) {
    var yearCE = inDate.getFullYear();
    var yearBE = yearCE + 543;

    var dateObject = {
        Y: yearBE,  // Convert to B.E.
        y: parseInt(yearBE.toString().slice(2)),  // Convert to B.E.
        M: ('0' + (inDate.getMonth() + 1)).slice(-2),  // Months are zero indexed
        d: ('0' + inDate.getDate()).slice(-2),
        H: ('0' + inDate.getHours()).slice(-2),
        m: ('0' + inDate.getMinutes()).slice(-2),
        s: ('0' + inDate.getSeconds()).slice(-2)
    };

    // Function to replace format tokens with actual date values
    function formatDate(format) {
        return format.replace(/([Y]{2,4}|y{2}|M{1,2}|d{1,2}|H{1,2}|m{1,2}|s{1,2})/g, function(token) {
            if (token.length === 4 || token.length === 2) {
                return dateObject[token.slice(-1)].toString().slice(-Math.abs(token.length));
            } else if (token.length === 1 && dateObject[token.slice(-1)][0] === "0") {
                return dateObject[token.slice(-1)].toString().slice(-1);
            }
            return dateObject[token.slice(-1)].toString();
        });
    }

    // Example format: "YYYY-MM-DD HH:mm:ss"
    return formatDate("YYYY-MM-DD HH:mm:ss");
}

// Export the function for use in other scripts
window.convertToBE = convertToBE;
