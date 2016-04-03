// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Hamlet Act 2 Quiz",
        "main":    "<p>Were you paying attention? We'll find out after we see what you score on the quiz!</p>",
        "results": "<h5>Good Job!</h5><p>You finished! Hopefully you did well.</p>",
        "level1":  "Shakespeare's Twin",
        "level2":  "You read the book alright!",
        "level3":  "Not Bad",
        "level4":  "Meh",
        "level5":  "What were you doing this whole time?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Polonius tells his Servant Reynaldo to go to Paris to assure safe arrival of Laertes, because he received an anonymous tip that Fortinbras was sending men there to execute him.",
            "a": [
                {"option": "True",      "correct": false},
                {"option": "False",     "correct": true}
            ],
            "correct": "<p><span>That's right!</span> Polonius doesn't love his son.</p>",
            "incorrect": "<p><span>Uhh no.</span>Polonius sent his servant Reynaldo to go spy on his son’s whereabouts because he does not trust his son Laertes and does not want bad rumors to spread of him partying and not learning.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Ophelia enters the scene and tells her father (Polonius) that she has been horrified by the Prince. Who came to her in her sewing room with his jacket askew and unfastened, and wearing no hat; his stockings were filthy and unfastened, drooping at his ankles; and he was pale and trembling, looking &quotpiteous.&quot",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "False",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Good!</span> That's exacltly what happened.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to re-read that part.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Prince Hamlet is confronted by rozancranst and Guildenstern, they ask hamlet many questions and eventually make Hamlet implode and tell them all he thinks and reveal his plan for the play.",
            "a": [
                {"option": "True",      "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span>Hamlet manipulates the 2 gents who he calls his dear friends into admitting it was king Claudius and queen Gertrude who had sent them to spy and get information from hamlet.</p>" // no comma here
        },
        { // Question 4
            "q": "Hamlet tells Rozencrans and Guildenstern that “Denmark is a prison” and Denmark Is “one o’the worst” to convince the 2 men that he is once again mad.",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Awesome!</span>You got that right!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry, but that <em>is</em> what happened in the book.</p>" // no comma here
        },
        { // Question 5
            "q": "Hamlet wishes to make an exact re-enactment of what the ghost described as hamlets father’s death, in hopes to make King Claudius look guilty, to be assured it was him who killed Hamlet’s father.",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span>That's the main point of the book. Hamlet tries to avenge his father's death!</p>"
        },
        { // Question 6
            "q": "This character is extremely melancholy and discontented with the state of affairs in Denmark and his own family.",
            "a": [
                {"option": "Claudius",      "correct": false},
                {"option": "Polonius",     "correct": false},
                {"option": "Hamlet",     "correct": true},
                {"option": "Horatio",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Yep</span>Nothing else to say.</p>",
            "incorrect": "<p><span>NOOOOO</span>It's Hamlet buddy, come on.</p>" //no comma here
        },
        { // Question 7
            "q": "Claudius invites them to court in order to spy on Hamlet.",
            "a": [
                {"option": "Messengers",      "correct": false},
                {"option": "Polonius",     "correct": false},
                {"option": "Ophelia & Gertrude",     "correct": false},
                {"option": "Rosencrantz and Guildenstern",     "correct": true}// no comma here
            ],
            "correct": "<p><span>Uhuh</span>You got it!</p>",
            "incorrect": "<p><span>Not even close</span>It was R&G, you should have known.</p>" // no comma here
        },
        { // Question 8
            "q": "This character believed that Ophelia caused Hamlet to go mad",
            "a": [
                {"option": "The King & Queen",      "correct": false},
                {"option": "Polonius",     "correct": true},
                {"option": "Ophelia & Horatio",     "correct": false},
                {"option": "Rosencrantz and Guildenstern",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Noice!</span>You got it!</p>",
            "incorrect": "<p><span>NOOOOO</span>Character is singular not plural.</p>" // no comma here
        },
        { // Question 9
            "q": "She is Old Hamlet’s widow and Claudius’ wife.",
            "a": [
                {"option": "Gertrude",      "correct": true},
                {"option": "Polonius",     "correct": false},
                {"option": "Ophelia",     "correct": false},
                {"option": "Trudy",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Good!</span>You got it!</p>",
            "incorrect": "<p><span>Awwwww</span>That should have been easy, it's Ophelia.</p>" // no comma here
        },
        { // Question 10
            "q": "This character is Polonius’ servant and is also sent to check on Laertes in Paris.",
            "a": [
                {"option": "Hamlet",      "correct": false},
                {"option": "Ronaldo",     "correct": false},
                {"option": "Reyanaldo",     "correct": false},
                {"option": "Reynaldo",     "correct": true}// no comma here
            ],
            "correct": "<p><span>Good!</span>That was a tricky one.</p>",
            "incorrect": "<p><span>NOOOOO</span>It's Reynaldo.</p>" // no comma here
        },
        { // Question 11
            "q": " Which quote was not spoken by Hamlet?",
            "a": [
                {"option": "“Ay, sir; to be honest, as this world goes, is to be one man picked out the of ten thousand.”",      "correct": false},
                {"option": "“then, ‘tis none to you’ for these is nothing either good or bad but thinking makes it so: to me it is a prison.”",     "correct": false},
                {"option": "“A dream itself is but a shadow”",     "correct": false},
                {"option": "”Truly, and I hold ambition of so airy and light a quality that it is but a shadow’s shadows”",     "correct": true}// no comma here
            ],
            "correct": "<p><span>Good!</span>He did not say that one.</p>",
            "incorrect": "<p><span>Wrong!</span>It was d, and it was spoken by Rosencrantz.</p>" // no comma here
        },
        { // Question 12
            "q": "“Give him this money, and these notes, Reynaldo.” Polonius said this quote when he sent Reynaldo to his son Laertes. Why did he send Reynaldo to Laertes? What Polonius asked Laertes to do when he arrived at Paris?",
            "a": [
                {"option": "Correct",      "correct": true},
                {"option": "Incorrect",      "correct": false}
            ],
            "correct": "<p><span>Good!</span>I could'nt have said it better myself.</p>",
            "incorrect": "<p><span>Wrong!</span>Polonius ordered Reynaldo to find out about how he lives in Paris. He sent Reynaldo to Laertes because he did not trust his son, Laertes.</p>" // no comma here
        },
        { // Question 13
            "q": "”Happy, in that we are not over happy; On Fortune’s cap we are not the very button.” Who said this quote?",
            "a": [
                {"option": "Horatio",      "correct": false},
                {"option": "Guildenstern",     "correct": true},
                {"option": "Romeo",     "correct": false},
                {"option": "Polonius",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Good!</span>Good job.</p>",
            "incorrect": "<p><span>Uhoh</span>It was Guildenstern.</p>" // no comma here
        },
        { // Question 14
            "q": "Which quote was spoken by Polonius?",
            "a": [
                {"option": "’Heavens make our presence and our practices pleasant and helpful to him!",      "correct": true},
                {"option": "”Why, then, ‘tis none to you, for there is nothing either good or bad, but thinking makes it so.”",     "correct": false},
                {"option": "”The best actors in the world, either for tragedy, comedy, history, pastoral, pastoral-comical, historical-pastoral, tragical-historical, tragical-comical-historical-pastoral, scene individable, or poem unlimited: Seneca cannot be too heavy, nor Plautus too light. For the law of writ and the liberty, these are the only men.”",     "correct": true},
                {"option": "”For if the sun breed maggots in a dead dog, being a god kissing carrion.”",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span>Yep that's the answer.</p>",
            "incorrect": "<p><span>No</span>The answer is c.</p>" // no comma here
        },
        { // Question 15
            "q": "” I am but mad north-north-west: when the wind is southerly I know a hawk from a handsaw.” Who’s the speaker and who is he/she speaking to?",
            "a": [
                {"option": "Correct",      "correct": true},
                {"option": "Incorrect",      "correct": false}
            ],
            "correct": "<p><span>Correct!</span>Yep that's the answer.</p>",
            "incorrect": "<p><span>No</span>The answer is: Speaker: Hamlet; Speaking to: Guildenstern</p>" // no comma here
        }
    ]
};
