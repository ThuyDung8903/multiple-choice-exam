$(document).ready(function () {
    const questions = [{
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: ["A. Việt Nam", "B. Lào", "C. Philipine", "D. Indonesia"],
        correctAnswer: 0
    }, {
        content: "Câu hỏi 2: Con số nào lớn nhất có 2 chữ số?",
        answers: ["A. 99", "B. 9^9", "C. 81", "D. Không có đáp án"],
        correctAnswer: 1
    }, {
        content: "Câu hỏi 3: Con cóc là cậu ông trời, Vậy là vợ của con cóc gọi là gì với ông trời?",
        answers: ["A. Mợ ông trời", "B. Ông trời", "C. Con ông trời", "D. Chả là cái gì"],
        correctAnswer: 0
    }, {
        content: "Câu hỏi 4: Khoa học nhận đình rằng trà xanh giảm cân tốt hơn cà phê, vậy 1 kg trà và 1 kg cà phê cái nào nặng hơn?",
        answers: ["A. 1 kg trà nặng hơn", "B. 1 kg cà phê nặng hơn", "C. Bằng nhau", "D. Không có đáp án"],
        correctAnswer: 2
    }, {
        content: "Câu hỏi 5: Tháng 2 nào có 30 ngày?",
        answers: ["A. Tháng 2 năm nhuận", "B. Tháng 2 năm thường", "C. Làm gì có", "D. Tháng 2 âm lịch"],
        correctAnswer: 3
    }, {
        content: "Câu hỏi 6: Thơ lục bát có mấy câu?",
        answers: ["A. 6", "B. 8", "C. Không quy định", "D. 14"],
        correctAnswer: 2
    }, {
        content: "Câu hỏi 7: Cái gì trong trắng ngoài xanh trồng đậu trồng hành rồi thả heo vào?",
        answers: ["A. Không có gì", "B. Bánh chưng", "C. Cái cây", "D. Bánh đậu xanh"],
        correctAnswer: 1
    }, {
        content: "Câu hỏi 8: Bây giờ Lan ít hơn Loan 3 tuổi, hỏi 2 năm nữa, Loan lớn hơn Lan bao nhiêu tuổi?",
        answers: ["A. 5 tuổi", "B. 2 tuổi", "C. 3 tuổi", "D. 1 tuổi"],
        correctAnswer: 2
    }, {
        content: "Câu hỏi 9: Trong một năm, mấy tháng có 28 ngày?",
        answers: ["A. 1 tháng", "B. 2 tháng", "C. Không có tháng nào", "D. 12 tháng"],
        correctAnswer: 3
    }, {
        content: "Câu hỏi 10: Bệnh gì bác sĩ bó tay?",
        answers: ["A. Gãy tay", "B. Đau bụng", "C. Gãy chân", "D. Đau đầu"],
        correctAnswer: 0
    }];
    showQuestion(0, questions);

});
let score = 0;

function showQuestion(questionIndex, questions) {
    let question = questions[questionIndex];
    $('.question').text(question.content);
    const answers = question.answers;
    for (let i = 0; i < answers.length; i++) {
        $('.answers').append(`<div class="answer cursor-pointer border border-dashed border-black h-[80px] flex items-center justify-center hover:bg-yellow-100" data-index="${i}">${question.answers[i]}</div>`);
    }
    $('.score').text('Score: ' + score);

    $('.answer').click(function () {
        const selectAnswerIndex = $(this).data("index");
        $('.answer').removeClass('hover:bg-yellow-100');
        if (selectAnswerIndex === question.correctAnswer) {
            score += 10;
            $(this).addClass('bg-green-400');
        }
        // else sai
        else {
            $(this).addClass('bg-red-400');
        }

        setTimeout(function () {
            questionIndex++;
            $('.answers').empty();
            if (questionIndex >= questions.length) {
                //Hiển thị kết quả thi
                $('.showQuestion').remove();
                $('.congratulation').removeClass('hidden');
                $('.score').text('Score: ' + score);
                $('.wrapper').addClass('bg-sky-200 shadow-lg w-2/3 mx-auto gap-8 rounded');
            } else {
                // Hiển thị câu hỏi tiếp theo du dung hay sai
                showQuestion(questionIndex, questions);
            }
        }, 800);

    })
}