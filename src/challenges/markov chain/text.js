const beginingText = 
`
A quantum computer is a computer that takes advantage of quantum mechanical phenomena.

At small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior, specifically quantum superposition and entanglement, using specialized hardware that supports the preparation and manipulation of quantum states.

Classical physics cannot explain the operation of these quantum devices, and a scalable quantum computer could perform some calculations exponentially faster (with respect to input size scaling)[2] than any modern "classical" computer. In particular, a large-scale quantum computer could break widely used encryption schemes and aid physicists in performing physical simulations; however, the current state of the art is largely experimental and impractical, with several obstacles to useful applications. Moreover, scalable quantum computers do not hold promise for many practical tasks, and for many important tasks quantum speedups are proven impossible.

The basic unit of information in quantum computing is the qubit, similar to the bit in traditional digital electronics. Unlike a classical bit, a qubit can exist in a superposition of its two "basis" states, which loosely means that it is in both states simultaneously. When measuring a qubit, the result is a probabilistic output of a classical bit, therefore making quantum computers nondeterministic in general. If a quantum computer manipulates the qubit in a particular way, wave interference effects can amplify the desired measurement results. The design of quantum algorithms involves creating procedures that allow a quantum computer to perform calculations efficiently and quickly.

Physically engineering high-quality qubits has proven challenging. If a physical qubit is not sufficiently isolated from its environment, it suffers from quantum decoherence, introducing noise into calculations. Paradoxically, perfectly isolating qubits is also undesirable because quantum computations typically need to initialize qubits, perform controlled qubit interactions, and measure the resulting quantum states. Each of those operations introduces errors and suffers from noise, and such inaccuracies accumulate.

National governments have invested heavily in experimental research that aims to develop scalable qubits with longer coherence times and lower error rates. Two of the most promising technologies are superconductors (which isolate an electrical current by eliminating electrical resistance) and ion traps (which confine a single ion using electromagnetic fields).

In principle, a non-quantum (classical) computer can solve the same computational problems as a quantum computer, given enough time. Quantum advantage comes in the form of time complexity rather than computability, and quantum complexity theory shows that some quantum algorithms for carefully selected tasks require exponentially fewer computational steps than the best known non-quantum algorithms. Such tasks can in theory be solved on a large-scale quantum computer whereas classical computers would not finish computations in any reasonable amount of time. However, quantum speedup is not universal or even typical across computational tasks, since basic tasks such as sorting are proven to not allow any asymptotic quantum speedup. Claims of quantum supremacy have drawn significant attention to the discipline, but are demonstrated on contrived tasks, while near-term practical use cases remain limited.

Optimism about quantum computing is fueled by a broad range of new theoretical hardware possibilities facilitated by quantum physics, but the improving understanding of quantum computing limitations counterbalances this optimism. In particular, quantum speedups have been traditionally estimated for noiseless quantum computers, whereas the impact of noise and the use of quantum error-correction can undermine low-polynomial speedups.

For many years, the fields of quantum mechanics and computer science formed distinct academic communities.[3] Modern quantum theory developed in the 1920s to explain the wave–particle duality observed at atomic scales,[4] and digital computers emerged in the following decades to replace human computers for tedious calculations.[5] Both disciplines had practical applications during World War II; computers played a major role in wartime cryptography,[6] and quantum physics was essential for the nuclear physics used in the Manhattan Project.[7]

As physicists applied quantum mechanical models to computational problems and swapped digital bits for qubits, the fields of quantum mechanics and computer science began to converge. In 1980, Paul Benioff introduced the quantum Turing machine, which uses quantum theory to describe a simplified computer.[8] When digital computers became faster, physicists faced an exponential increase in overhead when simulating quantum dynamics,[9] prompting Yuri Manin and Richard Feynman to independently suggest that hardware based on quantum phenomena might be more efficient for computer simulation.[10][11][12] In a 1984 paper, Charles Bennett and Gilles Brassard applied quantum theory to cryptography protocols and demonstrated that quantum key distribution could enhance information security.[13][14]


Peter Shor (pictured here in 2017) showed in 1994 that a scalable quantum computer would be able to break RSA encryption.
Quantum algorithms then emerged for solving oracle problems, such as Deutsch's algorithm in 1985,[15] the Bernstein–Vazirani algorithm in 1993,[16] and Simon's algorithm in 1994.[17] These algorithms did not solve practical problems, but demonstrated mathematically that one could gain more information by querying a black box with a quantum state in superposition, sometimes referred to as quantum parallelism.[18] Peter Shor built on these results with his 1994 algorithms for breaking the widely used RSA and Diffie–Hellman encryption protocols,[19] which drew significant attention to the field of quantum computing.[20] In 1996, Grover's algorithm established a quantum speedup for the widely applicable unstructured search problem.[21][22] The same year, Seth Lloyd proved that quantum computers could simulate quantum systems without the exponential overhead present in classical simulations,[23] validating Feynman's 1982 conjecture.[24]

Over the years, experimentalists have constructed small-scale quantum computers using trapped ions and superconductors.[25] In 1998, a two-qubit quantum computer demonstrated the feasibility of the technology,[26][27] and subsequent experiments have increased the number of qubits and reduced error rates.[25] In 2019, Google AI and NASA announced that they had achieved quantum supremacy with a 54-qubit machine, performing a computation that is impossible for any classical computer.[28][29][30] However, the validity of this claim is still being actively researched.[31][32]

The threshold theorem shows how increasing the number of qubits can mitigate errors,[33] yet fully fault-tolerant quantum computing remains "a rather distant dream".[34] According to some researchers, noisy intermediate-scale quantum (NISQ) machines may have specialized uses in the near future, but noise in quantum gates limits their reliability.[34]

Investment in quantum computing research has increased in the public and private sectors.[35][36] As one consulting firm summarized,[37]

... investment dollars are pouring in, and quantum-computing start-ups are proliferating. ... While quantum computing promises to help businesses solve problems that are beyond the reach and speed of conventional high-performance computers, use cases are largely experimental and hypothetical at this early stage.
And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:

With focus on business management’s point of view, the potential applications of quantum computing into four major categories are cybersecurity, data analytics and artificial intelligence, optimization and simulation, and data management and searching.[38]

Computer engineers typically describe a modern computer's operation in terms of classical electrodynamics. Within these "classical" computers, some components (such as semiconductors and random number generators) may rely on quantum behavior, but these components are not isolated from their environment, so any quantum information quickly decoheres. While programmers may depend on probability theory when designing a randomized algorithm, quantum mechanical notions like superposition and interference are largely irrelevant for program analysis.

Quantum programs, in contrast, rely on precise control of coherent quantum systems. Physicists describe these systems mathematically using linear algebra. Complex numbers model probability amplitudes, vectors model quantum states, and matrices model the operations that can be performed on these states. Programming a quantum computer is then a matter of composing operations in such a way that the resulting program computes a useful result in theory and is implementable in practice.

As physicist Charlie Bennett describes the relationship between quantum and classical computers,[39]

A classical computer is a quantum computer ... so we shouldn't be asking about "where do quantum speedups come from?" We should say, "well, all computers are quantum. ... Where do classical slowdowns come from?"

Physicist John Preskill coined the term quantum supremacy to describe the engineering feat of demonstrating that a programmable quantum device can solve a problem beyond the capabilities of state-of-the-art classical computers.[103][104][105] The problem need not be useful, so some view the quantum supremacy test only as a potential future benchmark.[106]

In October 2019, Google AI Quantum, with the help of NASA, became the first to claim to have achieved quantum supremacy by performing calculations on the Sycamore quantum computer more than 3,000,000 times faster than they could be done on Summit, generally considered the world's fastest computer.[29][107][108] This claim has been subsequently challenged: IBM has stated that Summit can perform samples much faster than claimed,[109][110] and researchers have since developed better algorithms for the sampling problem used to claim quantum supremacy, giving substantial reductions to the gap between Sycamore and classical supercomputers[111][112][113] and even beating it.[114][115][116]

In December 2020, a group at USTC implemented a type of Boson sampling on 76 photons with a photonic quantum computer, Jiuzhang, to demonstrate quantum supremacy.[117][118][119] The authors claim that a classical contemporary supercomputer would require a computational time of 600 million years to generate the number of samples their quantum processor can generate in 20 seconds.[120]

Claims of quantum supremacy have generated hype around quantum computing,[121] but they are based on contrived benchmark tasks that do not directly imply useful real-world applications.[86][122]

In the beginning God created the heaven and the earth.

And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.

And God said, Let there be light: and there was light.

And God saw the light, that it was good: and God divided the light from the darkness.

And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.

Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.

Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.

History

Ada Lovelace, whose notes added to the end of Luigi Menabrea's paper included the first algorithm designed for processing by an Analytical Engine. She is often recognized as history's first computer programmer.
See also: Computer program § History, Programmer § History, and History of programming languages
Programmable devices have existed for centuries. As early as the 9th century, a programmable music sequencer was invented by the Persian Banu Musa brothers, who described an automated mechanical flute player in the Book of Ingenious Devices.[3][4] In 1206, the Arab engineer Al-Jazari invented a programmable drum machine where a musical mechanical automaton could be made to play different rhythms and drum patterns, via pegs and cams.[5][6] In 1801, the Jacquard loom could produce entirely different weaves by changing the "program" – a series of pasteboard cards with holes punched in them.

Code-breaking algorithms have also existed for centuries. In the 9th century, the Arab mathematician Al-Kindi described a cryptographic algorithm for deciphering encrypted code, in A Manuscript on Deciphering Cryptographic Messages. He gave the first description of cryptanalysis by frequency analysis, the earliest code-breaking algorithm.[7]

The first computer program is generally dated to 1843, when mathematician Ada Lovelace published an algorithm to calculate a sequence of Bernoulli numbers, intended to be carried out by Charles Babbage's Analytical Engine.[8] However, Charles Babbage had already written his first program for the Analytical Engine in 1837.[9]


Data and instructions were once stored on external punched cards, which were kept in order and arranged in program decks.
In the 1880s, Herman Hollerith invented the concept of storing data in machine-readable form.[10] Later a control panel (plug board) added to his 1906 Type I Tabulator allowed it to be programmed for different jobs, and by the late 1940s, unit record equipment such as the IBM 602 and IBM 604, were programmed by control panels in a similar way, as were the first electronic computers. However, with the concept of the stored-program computer introduced in 1949, both programs and data were stored and manipulated in the same way in computer memory.[11]

Machine language
Machine code was the language of early programs, written in the instruction set of the particular machine, often in binary notation. Assembly languages were soon developed that let the programmer specify instruction in a text format (e.g., ADD X, TOTAL), with abbreviations for each operation code and meaningful names for specifying addresses. However, because an assembly language is little more than a different notation for a machine language, two machines with different instruction sets also have different assembly languages.


Wired control panel for an IBM 402 Accounting Machine. Wires connect pulse streams from the card reader to counters and other internal logic and ultimately to the printer.
Compiler languages
See also: Compiler
High-level languages made the process of developing a program simpler and more understandable, and less bound to the underlying hardware. The first compiler related tool, the A-0 System, was developed in 1952[12] by Grace Hopper, who also coined the term 'compiler'.[13][14] FORTRAN, the first widely used high-level language to have a functional implementation, came out in 1957,[15] and many other languages were soon developed—in particular, COBOL aimed at commercial data processing, and Lisp for computer research.

These compiled languages allow the programmer to write programs in terms that are syntactically richer, and more capable of abstracting the code, making it easy to target varying machine instruction sets via compilation declarations and heuristics. Compilers harnessed the power of computers to make programming easier[15] by allowing programmers to specify calculations by entering a formula using infix notation.

Source code entry
See also: Computer programming in the punched card era
Programs were mostly entered using punched cards or paper tape. By the late 1960s, data storage devices and computer terminals became inexpensive enough that programs could be created by typing directly into the computers. Text editors were also developed that allowed changes and corrections to be made much more easily than with punched cards.

Modern programming
Quality requirements
Main article: Software quality
Whatever the approach to development may be, the final program must satisfy some fundamental properties. The following properties are among the most important:[16] [17]

Reliability: how often the results of a program are correct. This depends on conceptual correctness of algorithms and minimization of programming mistakes, such as mistakes in resource management (e.g., buffer overflows and race conditions) and logic errors (such as division by zero or off-by-one errors).
Robustness: how well a program anticipates problems due to errors (not bugs). This includes situations such as incorrect, inappropriate or corrupt data, unavailability of needed resources such as memory, operating system services, and network connections, user error, and unexpected power outages.
Usability: the ergonomics of a program: the ease with which a person can use the program for its intended purpose or in some cases even unanticipated purposes. Such issues can make or break its success even regardless of other issues. This involves a wide range of textual, graphical, and sometimes hardware elements that improve the clarity, intuitiveness, cohesiveness and completeness of a program's user interface.
Portability: the range of computer hardware and operating system platforms on which the source code of a program can be compiled/interpreted and run. This depends on differences in the programming facilities provided by the different platforms, including hardware and operating system resources, expected behavior of the hardware and operating system, and availability of platform-specific compilers (and sometimes libraries) for the language of the source code.
Maintainability: the ease with which a program can be modified by its present or future developers in order to make improvements or to customize, fix bugs and security holes, or adapt it to new environments. Good practices[18] during initial development make the difference in this regard. This quality may not be directly apparent to the end user but it can significantly affect the fate of a program over the long term.
Efficiency/performance: Measure of system resources a program consumes (processor time, memory space, slow devices such as disks, network bandwidth and to some extent even user interaction): the less, the better. This also includes careful management of resources, for example cleaning up temporary files and eliminating memory leaks. This is often discussed under the shadow of a chosen programming language. Although the language certainly affects performance, even slower languages, such as Python, can execute programs instantly from a human perspective. Speed, resource usage, and performance are important for programs that bottleneck the system, but efficient use of programmer time is also important and is related to cost: more hardware may be cheaper.
Readability of source code
In computer programming, readability refers to the ease with which a human reader can comprehend the purpose, control flow, and operation of source code. It affects the aspects of quality above, including portability, usability and most importantly maintainability.

Readability is important because programmers spend the majority of their time reading, trying to understand, reusing and modifying existing source code, rather than writing new source code. Unreadable code often leads to bugs, inefficiencies, and duplicated code. A study found that a few simple readability transformations made code shorter and drastically reduced the time to understand it.[19]

Following a consistent programming style often helps readability. However, readability is more than just programming style. Many factors, having little or nothing to do with the ability of the computer to efficiently compile and execute the code, contribute to readability.[20] Some of these factors include:

Different indent styles (whitespace)
Comments
Decomposition
Naming conventions for objects (such as variables, classes, functions, procedures, etc.)
The presentation aspects of this (such as indents, line breaks, color highlighting, and so on) are often handled by the source code editor, but the content aspects reflect the programmer's talent and skills.

Various visual programming languages have also been developed with the intent to resolve readability concerns by adopting non-traditional approaches to code structure and display. Integrated development environments (IDEs) aim to integrate all such help. Techniques like Code refactoring can enhance readability.

Algorithmic complexity
The academic field and the engineering practice of computer programming are both largely concerned with discovering and implementing the most efficient algorithms for a given class of problems. For this purpose, algorithms are classified into orders using so-called Big O notation, which expresses resource use, such as execution time or memory consumption, in terms of the size of an input. Expert programmers are familiar with a variety of well-established algorithms and their respective complexities and use this knowledge to choose algorithms that are best suited to the circumstances.

Methodologies
The first step in most formal software development processes is requirements analysis, followed by testing to determine value modeling, implementation, and failure elimination (debugging). There exist a lot of different approaches for each of those tasks. One approach popular for requirements analysis is Use Case analysis. Many programmers use forms of Agile software development where the various stages of formal software development are more integrated together into short cycles that take a few weeks rather than years. There are many approaches to the Software development process.

Popular modeling techniques include Object-Oriented Analysis and Design (OOAD) and Model-Driven Architecture (MDA). The Unified Modeling Language (UML) is a notation used for both the OOAD and MDA.

A similar technique used for database design is Entity-Relationship Modeling (ER Modeling).

Implementation techniques include imperative languages (object-oriented or procedural), functional languages, and logic languages.

Measuring language usage
It is very difficult to determine what are the most popular modern programming languages. Methods of measuring programming language popularity include: counting the number of job advertisements that mention the language,[21] the number of books sold and courses teaching the language (this overestimates the importance of newer languages), and estimates of the number of existing lines of code written in the language (this underestimates the number of users of business languages such as COBOL).

Some languages are very popular for particular kinds of applications, while some languages are regularly used to write many different kinds of applications. For example, COBOL is still strong in corporate data centers[22] often on large mainframe computers, Fortran in engineering applications, scripting languages in Web development, and C in embedded software. Many applications use a mix of several languages in their construction and use. New languages are generally designed around the syntax of a prior language with new functionality added, (for example C++ adds object-orientation to C, and Java adds memory management and bytecode to C++, but as a result, loses efficiency and the ability for low-level manipulation).

Debugging
Main article: Debugging

The first known actual bug causing a problem in a computer was a moth, trapped inside a Harvard mainframe, recorded in a log book entry dated September 9, 1947.[23] "Bug" was already a common term for a software defect when this insect was found.
Debugging is a very important task in the software development process since having defects in a program can have significant consequences for its users. Some languages are more prone to some kinds of faults because their specification does not require compilers to perform as much checking as other languages. Use of a static code analysis tool can help detect some possible problems. Normally the first step in debugging is to attempt to reproduce the problem. This can be a non-trivial task, for example as with parallel processes or some unusual software bugs. Also, specific user environment and usage history can make it difficult to reproduce the problem.

After the bug is reproduced, the input of the program may need to be simplified to make it easier to debug. For example, when a bug in a compiler can make it crash when parsing some large source file, a simplification of the test case that results in only few lines from the original source file can be sufficient to reproduce the same crash. Trial-and-error/divide-and-conquer is needed: the programmer will try to remove some parts of the original test case and check if the problem still exists. When debugging the problem in a GUI, the programmer can try to skip some user interaction from the original problem description and check if remaining actions are sufficient for bugs to appear. Scripting and breakpointing is also part of this process.

Debugging is often done with IDEs. Standalone debuggers like GDB are also used, and these often provide less of a visual environment, usually using a command line. Some text editors such as Emacs allow GDB to be invoked through them, to provide a visual environment.

Programming languages
Main articles: Programming language and List of programming languages
And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.
See also: Computer program § Languages
Different programming languages support different styles of programming (called programming paradigms). The choice of language used is subject to many considerations, such as company policy, suitability to task, availability of third-party packages, or individual preference. Ideally, the programming language best suited for the task at hand will be selected. Trade-offs from this ideal involve finding enough programmers who know the language to build a team, the availability of compilers for that language, and the efficiency with which programs written in a given language execute. Languages form an approximate spectrum from "low-level" to "high-level"; "low-level" languages are typically more machine-oriented and faster to execute, whereas "high-level" languages are more abstract and easier to use but execute less quickly. It is usually easier to code in "high-level" languages than in "low-level" ones. Programming languages are essential for software development. They are the building blocks for all software, from the simplest applications to the most sophisticated ones.

Allen Downey, in his book How To Think Like A Computer Scientist, writes:

The details look different in different languages, but a few basic instructions appear in just about every language:
Input: Gather data from the keyboard, a file, or some other device.
Output: Display data on the screen or send data to a file or other device.
Arithmetic: Perform basic arithmetical operations like addition and multiplication.
Conditional Execution: Check for certain conditions and execute the appropriate sequence of statements.
Repetition: Perform some action repeatedly, usually with some variation.
Many computer languages provide a mechanism to call functions provided by shared libraries. Provided the functions in a library follow the appropriate run-time conventions (e.g., method of passing arguments), then these functions may be written in any other language.

And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.

And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.

And God called the firmament Heaven. And the evening and the morning were the second day.
Optoelectronics (or optronics) is the study and application of electronic devices and systems that find, detect and control light, usually considered a sub-field of photonics. In this context, light often includes invisible forms of radiation such as gamma rays, X-rays, ultraviolet and infrared, in addition to visible light. Optoelectronic devices are electrical-to-optical or optical-to-electrical transducers, or instruments that use such devices in their operation.[1]

Electro-optics is often erroneously used as a synonym, but is a wider branch of physics that concerns all interactions between light and electric fields, whether or not they form part of an electronic device.

Optoelectronics is based on the quantum mechanical effects of light on electronic materials, especially semiconductors, sometimes in the presence of electric fields.[2]

Photoelectric or photovoltaic effect, used in:
photodiodes (including solar cells)
phototransistors
photomultipliers
optoisolators
integrated optical circuit (IOC) elements
Photoconductivity, used in:
photoresistors
photoconductive camera tubes
charge-coupled imaging devices
Stimulated emission, used in:
injection laser diodes
quantum cascade lasers
Lossev effect, or radiative recombination, used in:
light-emitting diodes or LED
OLEDs
Photoemissivity, used in
photoemissive camera tube
Important applications[3] of optoelectronics include:

Optocoupler
And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.

And God called the dry land Earth, and the gathering of the waters called he Seas: and God saw that it was good.

And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.

And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.

And the evening and the morning were the third day.
Color (American English) or colour (Commonwealth English) is the visual perception based on the electromagnetic spectrum. Though color is not an inherent property of matter, color perception is related to an object's light absorption, reflection, emission spectra and interference. For most humans, colors are perceived in the visible light spectrum with three types of cone cells (trichromacy). Other animals may have a different number of cone cell types or have eyes sensitive to different wavelength, such as bees that can distinguish ultraviolet, and thus have a different color sensitivity range. Animal perception of color originates from different light wavelength or spectral sensitivity in cone cell types, which is then processed by the brain.

Colors have perceived properties such as hue, colorfulness (saturation) and luminance. Colors can also be additively mixed (commonly used for actual light) or subtractively mixed (commonly used for materials). If the colors are mixed in the right proportions, because of metamerism, they may look the same as a single-wavelength light. For convenience, colors can be organized in a color space, which when being abstracted as a mathematical color model can assign each region of color with a corresponding set of numbers. As such, color spaces are an essential tool for color reproduction in print, photography, computer monitors and television. The most well-known color models are RGB, CMYK, YUV, HSL and HSV.

Because the perception of color is an important aspect of human life, different colors have been associated with emotions, activity, and nationality. Names of color regions in different cultures can have different, sometimes overlapping areas. In visual arts, color theory is used to govern the use of colors in an aesthetically pleasing and harmonious way. The theory of color includes the color complements; color balance; and classification of primary colors (traditionally red, yellow, blue), secondary colors (traditionally orange, green, purple) and tertiary colors. The study of colors in general is called color science or colorology.

And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:

And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.

Optical fiber communications

And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.

And God set them in the firmament of the heaven to give light upon the earth,

And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.

And the evening and the morning were the fourth day.
Electromagnetic radiation is characterized by its wavelength (or frequency) and its intensity. When the wavelength is within the visible spectrum (the range of wavelengths humans can perceive, approximately from 390 nm to 700 nm), it is known as "visible light".

Most light sources emit light at many different wavelengths; a source's spectrum is a distribution giving its intensity at each wavelength. Although the spectrum of light arriving at the eye from a given direction determines the color sensation in that direction, there are many more possible spectral combinations than color sensations. In fact, one may formally define a color as a class of spectra that give rise to the same color sensation, although such classes would vary widely among different species, and to a lesser extent among individuals within the same species. In each such class, the members are called metamers of the color in question. This effect can be visualized by comparing the light sources' spectral power distributions and the resulting colors.

And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.

So God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.

And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowls multiply in the earth.

And the evening and the morning were the fifth day.

And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.

And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.

The familiar colors of the rainbow in the spectrum—named using the Latin word for appearance or apparition by Isaac Newton in 1671—include all those colors that can be produced by visible light of a single wavelength only, the pure spectral or monochromatic colors. The table at right shows approximate frequencies (in terahertz) and wavelengths (in nanometers) for spectral colors in the visible range. Spectral colors have 100% purity, and are fully saturated. A complex mixture of spectral colors can be used to describe any color, which is the definition of a light power spectrum.

The color table should not be interpreted as a definitive list; the spectral colors form a continuous spectrum, and how it is divided into distinct colors linguistically is a matter of culture and historical contingency.[1] Despite the ubiquitous ROYGBIV mnemonic used to remember the spectral colors in English, the inclusion or exclusion of colors in this table is contentious, with disagreement often focused on indigo and cyan.[2] Even if the subset of color terms is agreed, their wavelength ranges and borders between them may not be.

The intensity of a spectral color, relative to the context in which it is viewed, may alter its perception considerably according to the Bezold–Brücke shift; for example, a low-intensity orange-yellow is brown, and a low-intensity yellow-green is olive green.
In the beginning God created the heaven and the earth.

And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.

And God said, Let there be light: and there was light.

And God saw the light, that it was good: and God divided the light from the darkness.

And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.

And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.

And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.

And God called the firmament Heaven. And the evening and the morning were the second day.

And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.

And God called the dry land Earth, and the gathering of the waters called he Seas: and God saw that it was good.

And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.

And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.

And the evening and the morning were the third day.
Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.

Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.

And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:

And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.

And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.

And God set them in the firmament of the heaven to give light upon the earth,

And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.

And the evening and the morning were the fourth day.

Electronics has hugely influenced the development of modern society. The identification of the electron in 1897, along with the subsequent invention of the vacuum tube which could amplify and rectify small electrical signals, inaugurated the field of electronics and the electron age.[1] Practical applications started with the invention of the diode by Ambrose Fleming and the triode by Lee De Forest in the early 1900s, which made the detection of small electrical voltages such as radio signals from a radio antenna possible with a non-mechanical device.

Vacuum tubes (thermionic valves) were the first active electronic components which controlled current flow by influencing the flow of individual electrons,[2] They were responsible for the electronics revolution of the first half of the twentieth century,[3][4] They enabled the construction of equipment that used current amplification and rectification to give us radio, television, radar, long-distance telephony and much more. The early growth of electronics was rapid, and by the 1920s, commercial radio broadcasting and communications were becoming widespread and electronic amplifiers were being used in such diverse applications as long-distance telephony and the music recording industry.

The next big technological step took several decades to appear, when the first working point-contact transistor was invented by John Bardeen and Walter Houser Brattain at Bell Labs in 1947.[5] However, vacuum tubes played a leading role in the field of microwave and high power transmission as well as television receivers until the middle of the 1980s.[6] Since then, solid-state devices have all but completely taken over. Vacuum tubes are still used in some specialist applications such as high power RF amplifiers, cathode ray tubes, specialist audio equipment, guitar amplifiers and some microwave devices.

In April 1955, the IBM 608 was the first IBM product to use transistor circuits without any vacuum tubes and is believed to be the first all-transistorized calculator to be manufactured for the commercial market.[7][8] The 608 contained more than 3,000 germanium transistors. Thomas J. Watson Jr. ordered all future IBM products to use transistors in their design. From that time on transistors were almost exclusively used for computer logic and peripherals. However, early junction transistors were relatively bulky devices that were difficult to manufacture on a mass-production basis, which limited them to a number of specialised applications.[9]

The MOSFET (MOS transistor) was invented by Mohamed Atalla and Dawon Kahng at Bell Labs in 1959.[10][11][12][13] The MOSFET was the first truly compact transistor that could be miniaturised and mass-produced for a wide range of uses.[9] Its advantages include high scalability,[14] affordability,[15] low power consumption, and high density.[16] It revolutionized the electronics industry,[17][18] becoming the most widely used electronic device in the world.[12][19] The MOSFET is the basic element in most modern electronic equipment.[20][21]

As the complexity of circuits grew, problems arose.[22] One problem was the size of the circuit. A complex circuit like a computer was dependent on speed. If the components were large, the wires interconnecting them must be long. The electric signals took time to go through the circuit, thus slowing the computer.[22] The invention of the integrated circuit by Jack Kilby and Robert Noyce solved this problem by making all the components and the chip out of the same block (monolith) of semiconductor material. The circuits could be made smaller, and the manufacturing process could be automated. This led to the idea of integrating all components on a single-crystal silicon wafer, which led to small-scale integration (SSI) in the early 1960s, and then medium-scale integration (MSI) in the late 1960s, followed by VLSI. In 2008, billion-transistor processors became commercially available.[23]

And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.

So God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.

And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowls multiply in the earth.

And the evening and the morning were the fifth day.

And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.

And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.

Engineering is the practice of using natural science, mathematics, and the engineering design process[1] to solve technical problems, increase efficiency and productivity, and improve systems. Modern engineering comprises many subfields which include designing and improving infrastructure, machinery, vehicles, electronics, materials, and energy systems.[2]

The discipline of engineering encompasses a broad range of more specialized fields of engineering, each with a more specific emphasis on particular areas of applied mathematics, applied science, and types of application. See glossary of engineering.

The term engineering is derived from the Latin ingenium, meaning "cleverness" and ingeniare, meaning "to contrive, devise".[3]

The American Engineers' Council for Professional Development (ECPD, the predecessor of ABET)[4] has defined "engineering" as:

The creative application of scientific principles to design or develop structures, machines, apparatus, or manufacturing processes, or works utilizing them singly or in combination; or to construct or operate the same with full cognizance of their design; or to forecast their behavior under specific operating conditions; all as respects an intended function, economics of operation and safety to life and property.[5][6]

Electronics is a scientific and engineering discipline that studies and applies the principles of physics to design, create, and operate devices that manipulate electrons and other electrically charged particles. Electronics is a subfield of electrical engineering, but it differs from it in that it focuses on using active devices such as transistors, diodes, and integrated circuits to control and amplify the flow of electric current and to convert it from one form to another, such as from alternating current (AC) to direct current (DC) or from analog to digital. Electronics also encompasses the fields of microelectronics, nanoelectronics, optoelectronics, and quantum electronics, which deal with the fabrication and application of electronic devices at microscopic, nanoscopic, optical, and quantum scales.

Electronics have a profound impact on various aspects of modern society and culture, such as communication, entertainment, education, health care, industry, and security. The main driving force behind the advancement of electronics is the semiconductor industry, which produces the basic materials and components for electronic devices and circuits. The semiconductor industry is one of the largest and most profitable sectors in the global economy, with annual revenues exceeding $481 billion in 2018. The electronics industry also encompasses other sectors that rely on electronic devices and systems, such as e-commerce, which generated over $29 trillion in online sales in 2017.
`

export default beginingText;