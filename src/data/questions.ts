import { Question } from '../interfaces'

export const questions: Question[] = [
  {
    question: 'Who creates the Definition of Done?',
    answers: [
      `The Product Owner since they are responsible for the product's success.`,
      'If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.',
      'The Scrum Master since they are responsible for the productivity of the Developers.',
      `The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions.`
    ],
    correctAnswer: [2]
  },
  {
    question:
      'You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario.',
    answers: [
      'There should be six Product Owners, one for each Scrum Team.',
      'There should be six Product Owners, reporting to a chief Product Owner.',
      'The product has one Product Backlog.',
      'Each Scrum Team should have a separate Product Backlog.',
      'There should be only one Product Owner.'
    ],
    correctAnswer: [3, 5]
  },
  {
    question:
      'A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding he is accountable for the Product Backlog. However, he is unsure about his responsibilities. Which two activities are part of the Product Owner role according to Scrum?',
    answers: [
      'Ensuring that the most valuable functionality is produced first, at all times.',
      'Interacting with stakeholders.',
      'Providing the Development Team with detailed specifications.',
      'Describing features as Use Cases.',
      'Creating detailed functional test cases.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'User documentation is part of your definition of "Done". However, there aren\'t enough technical writers for all teams. Your Development Team doesn\'t have a technical writer. What should you do?',
    answers: [
      'Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out.',
      'Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers.',
      'Wait until you have a technical writer on your Development Team to take care of this.',
      'Your Development Team is still responsible for creating user documentation. In this case, the Development Team members will write it.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a technical specialist who is external to the teams. What are two key concerns for the Scrum Master to take into account in this situation?',
    answers: [
      'The desire to maintain a stable velocity.',
      'The benefit of Development Teams figuring out a solution for themselves.',
      'The need to have enough work to keep all Development Team members busy.',
      'The ability of the Development Teams to produce integrated Increments.'
    ],
    correctAnswer: [2, 4]
  },
  {
    question: 'The Product Backlog is ordered by:',
    answers: [
      'The Product Owner with the most valuable items placed at the top.',
      'Risk, where safer items are at the top, and riskier items are at the bottom.',
      'Items are randomly arranged.',
      'Size, where small items are at the top and large items are at the bottom.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'What happens if the Development Team cannot complete its work by the end of the Sprint?',
    answers: [
      'The Sprint is extended and future Sprints use this new duration.',
      'The Sprint length holds and the Development Team continuously learns what is actually possible to do within a Sprint of this length.',
      "The Sprint is extended temporarily. Lessons are taken to ensure it doesn't happen again."
    ],
    correctAnswer: [2]
  },
  {
    question: 'Which topics should be discussed in the Sprint Review?',
    answers: [
      'The Scrum process, and how it was used during the Sprint.',
      'Coding and engineering practices.',
      'Sprint results.',
      'All of the above.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A member of the Development Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?',
    answers: [
      'Add security to the definition of "Done".',
      'Tell the Product Owner to stop further development of features until the issues are fixed.',
      'Create a Product Backlog item for security.',
      'Go check with the testers.',
      'Ask the person to share the issue with the team as soon as possible.'
    ],
    correctAnswer: [5]
  },
  {
    question:
      'What does it mean for a Development Team to be cross-functional?',
    answers: [
      'The Development Team includes not only developers but also business analysts, architects, and testers.',
      'The Development Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an increment of software.',
      'Developers on the Development Team work closely with business analysts, architects, developers and testers who are not on the team.',
      'The Development Team is a virtual team drawing from separate teams of business analysts, architects, developers and testers.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Sprint burndown charts are an efficient tracking tool, because they show:',
    answers: [
      'An estimate of the total work remaining for the Sprint.',
      'How much effort has gone into a Sprint.',
      'How many hours have been worked by each Development Team member.',
      'How many Product Backlog items remain.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'How much work must a Development Team do to a Product Backlog item it selects for a Sprint?',
    answers: [
      'A proportional amount of time on analysis, design, programming, testing, and documentation.',
      'As much as it can fit into the Sprint. Any remaining work will be transferred to a subsequent Sprint.',
      'All development work and at least some testing.',
      'As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the definition of "Done".'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Which statement best describes the Sprint Backlog as outcome of the Sprint Planning?',
    answers: [
      'It is a complete list of all work to be done in a Sprint.',
      'Every item has a designated owner.',
      'Each task is estimated in hours.',
      "It is the Development Team's plan for the Sprint.",
      'It is ordered by the Product Owner.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'If burndown charts are used to visualize progress, what does a trend line through a release burndown chart indicate?',
    answers: [
      'The evolution of the cost spent on the project.',
      'When all work will be completed to the Scrum Team can be released for other work.',
      'When the work remaining will likely be completed if nothing changes on the Product Backlog or the Development Team.',
      'When the project will be over if the Product Owner removes work that is equal in effort to any new work that is added.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'Who is responsible for engaging the stakeholders?',
    answers: [
      'The Business Analyst.',
      'The Development Team.',
      'The Team Manager.',
      'The Project Manager.',
      'The Product Owner.'
    ],
    correctAnswer: [5]
  },
  {
    question:
      'At the end of a Sprint Product Backlog item worked on during the Sprint does not meet the definition of "Done". What two things should happen with the undone Product Backlog item?',
    answers: [
      'If the stakeholders agree, the Product Owner can accept it and release it to the users.',
      'Put it on the Product Backlog for the Product Owner to decide what to do with it.',
      'Review the item, add the "Done" part of the estimate to the velocity and create a Story for the remaining work.',
      'Do not include the item in the Increment this Sprint.'
    ],
    correctAnswer: [2, 4]
  },
  {
    question:
      'Which two of the following are true about the Scrum Master role?',
    answers: [
      'At the Sprint Review, the Scrum Master identifies what has been "done" and what has not been "done".',
      'The Scrum Master teaches the Development Team to keep the Scrum meetings to their time-box.',
      'The Scrum Master helps those outside the team interact with the Scrum Team.',
      'The Scrum Master assigns tasks to Development Team members when they need work.',
      'The Scrum Master is responsible for updating the Sprint Burndown.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question: 'What are three benefits of self-organization?',
    answers: [
      'Increased creativity.',
      'Increased rule compliance.',
      'Increased accuracy of estimates.',
      'Increased self-accountability',
      'Increased commitment.'
    ],
    correctAnswer: [1, 4, 5]
  },
  {
    question: 'Which three of the following are time-boxed events in Scrum?',
    answers: [
      'Release Testing.',
      'Release Retrospective.',
      'Sprint Retrospective.',
      'Sprint Planning.',
      'Sprint Testing.',
      'Sprint 0.',
      'Daily Scrum.'
    ],
    correctAnswer: [3, 4, 7]
  },
  {
    question:
      'Who is responsible for clearly expressing Product Backlog items?',
    answers: [
      'The Scrum Master, or the Scrum Master may have the Development Team do it.',
      'The Scrum Master.',
      'The Product Owner.',
      'The business analyst who represents the Product Owner in the Development Team.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'What is the best suited structure for Development Teams in order to produce integrated Increments?',
    answers: [
      'Each Development Team works only one technical layer of the system (e.g. GUI, database, middle tier, interfaces).',
      'Each Development Team develops functionality from beginning to end throughout all technical layers.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Why should the Product Owner be present at the Daily Scrum?',
    answers: [
      "He/She doesn't need to be there.",
      'To hear about impediments in functionality.',
      "To represent the stakeholder's point of view.",
      'To participate as a Scrum Team member.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'What two techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which development techniques to apply?',
    answers: [
      'Involve the complete Development Team.',
      'Use coaching techniques; such as open questions and active listening.',
      'Ask an external technical specialist to make the decision.',
      "Send every team member to the company's Human Resources department to express their concerns."
    ],
    correctAnswer: [1, 2]
  },
  {
    question: 'What enhances the transparency of an increment?',
    answers: [
      'Doing all work needed to meet the definition of "Done"',
      'Reporting Sprint progress to the stakeholders daily',
      'Keeping track of and estimating all undone work to be completed in a separate Sprint.',
      'Updating Sprint tasks properly in the electronic tracking tool.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Who determines how work is performed during the Sprint?',
    answers: [
      'Architects.',
      'The Development Team.',
      'The Scrum Master.',
      'Subject matter experts.',
      'Development Team managers.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'When does the second Sprint start?',
    answers: [
      'Once the architectural changes for the second Sprint have been approved by the senior architect.',
      'After the Product Backlog for the second Sprint has been selected.',
      'Immediately after the first Sprint.',
      'After the customer completes acceptance testing of the first Sprint.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'What is included in the Sprint Backlog?',
    answers: [
      'User Stories.',
      'Tasks.',
      'Use Cases.',
      'Tests.',
      'Any of the above (or others) which are a decomposition of the selected Product Backlog items.'
    ],
    correctAnswer: [5]
  },
  {
    question: 'Which of the following are true about the Product Owner role?',
    answers: [
      'The Product Owner is one person.',
      'The Product Owner is accountable for ordering the Product Backlog.',
      'Multiple people can share the Product Owner role on a Scrum Team.',
      'The Product Owner role can be played by a committee or a team of people.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team?',
    answers: [
      'Its productivity is likely to decrease.',
      'Its productivity is likely to stay the same.',
      'Its productivity is likely to increase.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A Scrum Master is introducing Scrum to a new Development Team. The Development Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take?',
    answers: [
      'Call a meeting between the Development Team and senior management.',
      'Comply with the decision of the self-organizing team.',
      'Consult with the Product Owner to see how he/she feels about the situation.',
      'Begin facilitating productive and useful Sprint Retrospectives.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      "Which two things are appropriate for a Scrum Master to do if the Development Team doesn't have the engineering tools and infrastructure to completely finish each selected Product Backlog item?",
    answers: [
      'Coach the Development Team to improve its skills, tools, and infrastructure over time and adjust the Definition of "Done" accordingly.',
      'Encourage the Product Owner to accept partially "Done" increments until the situation improves.',
      "Refocus the current Sprint on establishing the Development Team's infrastructure instead of delivering an increment.",
      'Declare the Development Team not ready for Scrum.',
      'Have the Development Team establish a Definition of "Done" that is actually possible to achieve given current circumstances.'
    ],
    correctAnswer: [1, 5]
  },
  {
    question:
      'When is implementation of a Product Backlog item considered complete?',
    answers: [
      'At the end of the Sprint.',
      'When the item has no work remaining in order to be potentially released.',
      'When QA reports that the item passes all acceptance criteria.',
      'When all work in the Sprint Backlog related to the item is finished.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Choose two responsibilities of a self-organizing Development Team.',
    answers: [
      'Reorder the Product Backlog.',
      'Pull Product Backlog items for the Sprint.',
      'Do the work planned in the Sprint Backlog.',
      'Increase velocity.',
      'Report daily progress to stakeholders.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question: 'Every Development Team should have:',
    answers: [
      'At least one representative from each major software engineering discipline (like QA, Dev, UX).',
      'The competencies and skills needed to deliver a Done Increment in a Sprint.',
      'One Lead Developer and no more than 8 other members.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Why does the Product Owner want the Development Team to adhere to its definition of "Done"?',
    answers: [
      'To have complete transparency into what has been done at the end of each Sprint.',
      "To be able to reprimand the team when they don't meet their velocity goal for the Sprint.",
      'To know what the team will deliver over the next three Sprints.',
      "To predict the team's productivity over time."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'During a Sprint Retrospective, for what is the Scrum Master responsible?',
    answers: [
      'Prioritizing the resulting action items.',
      'Participating as a Scrum team member and facilitating as requested or needed.',
      "Acting as a scribe to capture the Development Team's answers.",
      'Summarizing and reporting the discussions to management.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'What is the Scrum Master responsible?',
    answers: [
      'Prioritizing the resulting action items.',
      'Participating as a Scrum team member and facilitating as requested or needed.',
      "Acting as a scribe to capture the Development Team's answers.",
      'Summarizing and reporting the discussions to management.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take?',
    answers: [
      'Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.',
      'Suggest that the Development Team does the ordering to be sure that it is a feasible ordering of work.',
      'Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.',
      'Present the Product Owner with an ordered Product Backlog to use.',
      'Encourage the Product Owner to work with the Development Team to see which items technically are fastest to implement.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'True or False: The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the stakeholders.',
    answers: ['Yes', 'False'],
    correctAnswer: [2]
  },
  {
    question: 'Which statement best describes the Sprint Review?',
    answers: [
      'It is used to congratulate the Development Team if it did what it forecast, or to punish the Development Team if it failed to meet its forecast.',
      'It is a demo at the end of the Sprint for everyone in the organization to check on the work done.',
      "It is a mechanism to control the Development Team's activities during a Sprint.",
      'It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Who owns the Sprint Backlog?',
    answers: [
      'The Scrum Team.',
      'The Product Owner.',
      'The Scrum Master.',
      'The Development Team.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'When might a Sprint be abnormally cancelled?',
    answers: [
      'When the Development Team feels that the work is too hard.',
      'When the Sprint Goal becomes obsolete.',
      'When the sales department has an important new opportunity.',
      'When it becomes clear that not everything will be finished by the end of the Sprint.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'A Sprint Retrospective should be held:',
    answers: [
      'At the end of each Sprint.',
      'At the beginning of each Sprint.',
      'Only when the Scrum Team determines it needs one.',
      'At the end of the last Sprint in a project or a release.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A new developer is having continuing conflicts with existing Development Team members and creating the hostile environment. If necessary, who is responsible for removing the team member?',
    answers: [
      'The hiring manager is responsible, because he/she hired the developer.',
      'The Scrum Manager is responsible, because he/she removes Impediments.',
      'The Development Team is responsible, and may need help from the Scrum Master.',
      'The Product Owner is responsible, because he/she controls the return on investment (ROI).'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Which three purposes does the definition of "Done" serve?',
    answers: [
      'Guide the Development Team on how many Product Backlog items to select for the Sprint.',
      'Create a shared understanding of when work is complete.',
      'Describe the purpose, objective, and time-box of each Scrum event.',
      'Describe the work that must be done before the Sprint is allowed to end.',
      'Increase transparency.'
    ],
    correctAnswer: [1, 2, 5]
  },
  {
    question:
      'During a Sprint Retrospective, the Development Team proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master?',
    answers: [
      'Consider the request and decide on which days the Daily Scrum should occur.',
      'Coach the team on why the Daily Scrum is important as an opportunity to update the plan.',
      'Have the developers vote.',
      'Learn why the Development Team wants this and work with them to improve the outcome of the Daily Scrum.',
      "Acknowledge and support the self-organizing team's decision."
    ],
    correctAnswer: [2, 4]
  },
  {
    question: 'When should a Sprint Goal be created?',
    answers: [
      'It should have been created in the previous Sprint during Product Backlog refinement.',
      'It must be established before Sprint Planning in order to begin planning.',
      'A Sprint Goal is not mandatory in Scrum.',
      'At any time during the Sprint.',
      'During Sprint Planning.'
    ],
    correctAnswer: [5]
  },
  {
    question:
      'True or False: Every Scrum team must have a Product Owner and Scrum Master.',
    answers: [
      'True. Outcomes affected by their participation and availability.',
      'False. A Product Owner can be replaced by a business analyst in the Development Team.',
      'False. A Scrum Master is only required when asked for by the Development Team.',
      'True. Each must be 100% dedicated to the Scrum Team.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Who can abnormally terminate a Sprint?',
    answers: [
      'The Scrum Master.',
      'The Development Team or its members.',
      'The Product Owner.',
      'The Stakeholders.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'True or False: The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question:
      'Which two of the following are appropriate topics for discussion during a Sprint Retrospective?',
    answers: [
      'Identifying high priority process improvements for the next Sprint.',
      'The order of items in the Product Backlog.',
      'How the team collaborates.',
      'Documenting acceptance criteria for items in the next Sprint.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'A Scrum Master is working with a Development Team that has members in different physical locations. The Development Team meets in a variety of meeting rooms and has much to do logistically (for example, set up conference calls) before the Daily Scrum. What action should the Scrum Master take?',
    answers: [
      'Allow the Development Team to self-manage and determine for itself what to do.',
      'Set up the meeting and tell the Development Team that is how it will be done.',
      'Ask the Development Team members to alternate who is responsible for meeting setup.',
      'Inform management and ask them to solve it.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'True or False: Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Which of the following might the Scrum Team discuss during a Sprint Retrospective?',
    answers: [
      'Methods of communication.',
      'The way the Scrum Team does Sprint Planning.',
      "Skills needed to improve the Development Team's ability to deliver.",
      'Its Definition of "done".',
      'All of the above.'
    ],
    correctAnswer: [5]
  },
  {
    question:
      'What are the two primary ways a Scrum Master keeps a Development Team working at its highest level of productivity?',
    answers: [
      'By ensuring the meetings start and end at the proper time.',
      'By removing impediments that hinder the Development Team.',
      'By facilitating Development Team decisions.',
      'By keeping high value features high in the Product Backlog.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question: 'What is the recommended size for a Development Team?',
    answers: ['7 plus or minus 3.', 'At least 7.', '9.', '3 to 9.'],
    correctAnswer: [4]
  },
  {
    question:
      'You are the Scrum Master of a new, to be developed product. Development is going to require 45 people. What is a good first question-for you to suggest the group thinks about when forming into teams?',
    answers: [
      'How will we make sure all teams have the right amount or expertise?',
      'What is the right mixture of senior and junior people on each team?',
      'Who are going to be the team leads?',
      'Who are the subject matter experts on each team?'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Which three of the following are feedback loops in Scrum?',
    answers: [
      'Sprint Review.',
      'Release Planning.',
      'Sprint Retrospective.',
      'Refinement Meeting.',
      'Daily Scrum.'
    ],
    correctAnswer: [1, 3, 5]
  },
  {
    question:
      "When a Development Team is having trouble delivering a working Increment because they don't understand a functional requirement, what should they do?",
    answers: [
      'Add a specialist to the Development Team.',
      'Partially complete the functionality, and discuss the remaining work at the Sprint Review.',
      'Collaborate with the Product Owner to determine what is possible and acceptable.',
      'Defer the work to a more appropriate Sprint.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'When is the Sprint Backlog created?',
    answers: [
      'At the beginning of the project.',
      'During the Sprint Planning meeting.',
      'Prior to the Sprint Planning meeting.',
      'During the Sprint.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum?',
    answers: [
      'Lead the discussions of the Development Team.',
      'Make sure that all 3 questions have been answered by each member of the team.',
      'Keep track of whether each team member has a chance to speak.',
      'Teach the Development Team to keep the Daily Scrum within the 15 minute time-box.',
      'All of the above.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Which of the following best describes an increment of working software?',
    answers: [
      'A decomposition of all Product Backlog items into tasks for future Sprint Backlog lists.',
      'Additional features in a usable state that complement those delivered in previous iterations.',
      'A new user interface design for functionality delivered in previous iterations.',
      'An automated test suite to verify functionality delivered in previous iterations.',
      'UML diagrams that describe how to deliver functionality in future iterations.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'In order to achieve the benefits of Scrum, it is important to enact the value of commitment. What two actions demonstrate the commitment of Scrum Team members?',
    answers: [
      'Always deliver the items in the Sprint forecast.',
      'Help the other Scrum Team members.',
      'Do your best',
      'Send out a daily status report.',
      'Work late.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'The Product Owner determines how many Product Backlog items the Development Team selects for a Sprint.',
    answers: [
      'False.',
      'True, accordingly to what was committed to the stakeholders.',
      'True, but only after confirmation by the resource manager that the Team has enough capacity.',
      'True.',
      'False, the Scrum Master does that.',
      "False, capacity and commitment are the Project manager's responsibility."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'The Sprint Review is mainly an inspect and adapt opportunity for which group?',
    answers: [
      'The Development Team and stakeholders.',
      'The Product Owner and Development Team.',
      'The Scrum Team and stakeholders.',
      'The Product Owner and management.',
      'The Development Team and management.',
      'The Product Owner and stakeholders.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, a Development Team to implement those ideas and a Scrum Master to help guide the process.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question:
      'Who is responsible for tracking the remaining work of the Sprint?',
    answers: [
      'The Development Team.',
      'The Scrum Master.',
      'The Project Manager.',
      'The Development Team is consultation with the Product Owner.',
      'The Product Owner.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'How is management external to the Scrum Team involved in the Daily Scrum?',
    answers: [
      'The Scrum Master speaks on their behalf.',
      'The Development Team self-manages and is the only management required at the Daily Scrum.',
      'Management gives an update at the start of each Daily Scrum.',
      'The Product Owner represents their opinions.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A Scrum Master is keeping a list of open impediments, but it is growing and he/she has been able to resolve only a small portion of the impediments. Which three techniques would be most helpful in this situation?',
    answers: [
      'Consulting with the Development Team.',
      'Prioritizing the list and working on them in order.',
      'Arranging a triage meeting with all project managers.',
      'Alerting management to the impediments and their impact.'
    ],
    correctAnswer: [1, 2, 4]
  },
  {
    question:
      'Which Scrum Value is affected by a lack of trust in the Scrum Team?',
    answers: [
      'Focus',
      'Respect',
      'Openness',
      'Courage',
      'Commitment.',
      'All of the above.'
    ],
    correctAnswer: [6]
  },
  {
    question:
      'A Product Owner wants advice from the Scrum Master about estimating work in Scrum. Which of these is the guideline that a Scrum Master should give?',
    answers: [
      'Product Backlog items must be estimated in story points.',
      'Estimates are made by the Development Team.',
      'Estimates must be in relative units.',
      'Scrum forbids estimating.',
      'Estimates are made by the Product Owner, but are best checked with the Development Team.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'What is a Development Team responsible for?',
    answers: [
      'Resolving internal team conflicts.',
      'Reporting productivity.',
      'Selecting the Product Owner.',
      'Organizing the work required to meet the Sprint Goal.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      "Which two ways of creating Development Teams are consistent with Scrum's values?",
    answers: [
      'Existing teams propose how they would like to go about organizing into the new structure.',
      'Managers personally re-assign current subordinates to new teams.',
      'Managers collaborate to assign individuals to specific teams.',
      'Bring all the developers together and let them self-organize into Development Teams.',
      'The Chief Product Owner determines the new team structures and assignments.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      'A Scrum Master is essentially the same thing as a traditional PM (Project Manager).',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'The Product Owner is not collaborating with the Development Team during the Sprint. What are two valuable actions for a Scrum Master to take?',
    answers: [
      "Inform the Product Owner's functional manager.",
      'Stop the Sprint, send the Product Owner to a course and restart.',
      'Bring up the problem in the Sprint Retrospective.',
      'Coach the Product Owner in the values of Scrum and incremental delivery.',
      'Nominate a proxy Product Owner.'
    ],
    correctAnswer: [3, 4]
  },
  {
    question:
      'True or False: Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question:
      'For the purpose of transparency, when does Scrum say a new increment of working software must be available?',
    answers: [
      'After the acceptance testing phase.',
      'Before the release Sprint.',
      'Every 3 Sprints.',
      'At the end of every Sprint.',
      'When the Product Owner asks to create one.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Multiple Scrum Teams working on the same project must have the same Sprint start date.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'During a Sprint Retrospective, for what is the Product Owner responsible?',
    answers: [
      'Participating as a Scrum Team member.',
      'Summarizing and reporting the discussions to the stakeholders that he/she represents in the Scrum Team.',
      'Capturing requirements for the Product Backlog.',
      'The Product Owner should not take part in Sprint Retrospectives.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Marian is the Product Owner envisioning a project for a new release of her product. She made a projection of a release date based upon a sustained velocity of 17 completed units of work per Sprint. Over the first 3 Sprints, the average velocity was 13 for work that the Development Team estimated as 90% done. The Development Teams, feeling the need to meet the plan, figured that a velocity of 17 was within their reach. A good way to continue is:',
    answers: [
      'The Development Team makes sure that all of the selected scope per Sprint is as "Done" as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint, so it doesn\'t mess up the Product Backlog.',
      'Add enough people to the Development Team for the deadline to be made.',
      "The opportunity to inspect and adapt is lost. Opaqueness has replaced transparency. Predictability has dropped below zero. The produced software is not usable. As the rules of Scrum have not been respected, it is the Scrum Master's duty to assess whether repair is possible, or a restart with a more reliable team. If not, the Scrum Master should cancel the project.",
      'The Development Team should remind Marian to find funding for enough Release Sprints in which the remaining work can be done.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The time-box for a Daily Scrum?',
    answers: [
      'Two minutes per person.',
      '15 minutes.',
      '15 minutes for a 4 week sprint. For shorter Sprints it is usually shorter.',
      '4 hours.',
      'The same time of day every day.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Which phrase best describes a Product Owner?',
    answers: [
      'Go-between development team and customers.',
      'Value optimizer.',
      'Requirements engineer.',
      'Team manager.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'The length of a Sprint should be:',
    answers: [
      'Short enough to keep the business risk acceptable to the Product Owner.',
      'Short enough to be able to synchronize the development work with other business events.',
      'No more than one calendar month.',
      'All of these answers are correct.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'What are two responsibilities of testers in a Development Team?',
    answers: [
      'Verifying the work of programmers.',
      'Everyone in the Development Team is responsible for quality.',
      'Tracking quality metrics.',
      'Finding bugs.',
      'Scrum has no "tester" role.'
    ],
    correctAnswer: [2, 5]
  },
  {
    question:
      'The CEO asks the Development Team to add a "very important" item to a Sprint that is in progress. What should the Development Team do?',
    answers: [
      'Add the item to the current Sprint and drop an item of equal size.',
      'Add the item to the current Sprint without any adjustments.',
      'Inform the Product Owner so he/she can work with the CEO.',
      'Add the item to the next Sprint.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'What is the role of management in Scrum?',
    answers: [
      'To facilitate the Scrum Teams with insights and resources that help them improve.',
      "To monitor the Development Team's productivity.",
      "To identify and remove people that aren't working hard enough.",
      'To continually monitor staffing levels of the Development Team.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Which technique is the best way the Scrum Master can ensure that the Development Team communicates effectively with the Product Owner?',
    answers: [
      'Monitor communications between them and facilitate direct collaboration.',
      'Teach the Development Team to talk in terms of business needs and objectives.',
      'Teach the Product Owner about the technologies employed during the Sprints.',
      'Act as a go-between for them.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'How much of the Sprint Backlog must be defined during the Sprint Planning event?',
    answers: [
      "Just enough tasks for the Scrum Master to be confident in the Development Team's understanding of the Sprint.",
      'The entire Sprint Backlog must be identified and estimated by the end of the Sprint Planning meeting.',
      'Enough so the Development Team can create its best forecast of what is can do, and to start the first several days of the Sprint.',
      'Just enough to understand design and architectural implications.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'Who is responsible for managing the progress of work during a Sprint?',
    answers: [
      'The Scrum Master.',
      'The Development Team.',
      'The Product Owner.',
      'The most junior member of the Team.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'What two factors are best considered when establishing the Sprint length?',
    answers: [
      'The organization has mandated similar length sprints.',
      'The level of uncertainty over the technology to be used.',
      'The frequency at which team formation can be changed.',
      'The risk of being disconnected from the stakeholders.'
    ],
    correctAnswer: [2, 4]
  },
  {
    question:
      'Which of these may a Development Team deliver at the end of a Sprint?',
    answers: [
      'Failing unit tests, to identify acceptance tests for the next Sprint.',
      'An increment of software with minor known bugs in it.',
      'An increment of working software that is "done".',
      'A single document, if that is what the Scrum Master asked for.'
    ],
    correctAnswer: [3]
  },
  {
    question: "Who creates a Product Backlog item's estimate?",
    answers: [
      'The Development Team after clarifying requirements with the Product Owner.',
      'The Product Owner with input from the Development Team.',
      'The most senior people in the organization, including architects and subject matter experts.',
      'The Scrum Master.',
      'The Development Team, alone.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Who starts the Daily Scrum?',
    answers: [
      'The person coming in last. This encourages people to be on time and helps to stay within the time-box.',
      'Whoever the Development Team decides should start.',
      'The person who has the token.',
      'The Scrum Master. This ensures that the Development Team has the meeting and stays within the time-box.',
      'The person who last broke the build.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up?',
    answers: [
      'Introduce a bonus system for the top performers in the team.',
      'Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history.',
      'Have the development managers for each Development Team member introduce their direct reports and go over their responsibilities on the Scrum Team.',
      'Ensure the Scrum Team members have compatible personalities.',
      'Ensure the team understands they need a definition of "Done".',
      'Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions.'
    ],
    correctAnswer: [2, 5, 6]
  },
  {
    question:
      'A Development Team selects a set of Product Backlog items for a Sprint Backlog with the intent to get the selected items "Done" by the end of the Sprint. Which three phrases best describe the purpose of a definition of "Done"?',
    answers: [
      'It controls whether the developers have performed their tasks.',
      'It provides a template for elements that need to be included in the technical documentation.',
      'It creates transparency over the work inspected at the Sprint Review.',
      'It tracks the percent completeness of a Product Backlog item.',
      'It guides the Development Team is creating a forecast at the Sprint Planning.',
      'It defines what it takes for an Increment to be ready for release.'
    ],
    correctAnswer: [3, 5, 6]
  },
  {
    question:
      'The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days?',
    answers: [
      'Opportunities to inspect and adapt the Sprint Backlog are lost.',
      'Impediments are raised and resolved more slowly.',
      'The Product Owner cannot accurately report progress to the stakeholders.',
      'Too much work is spent updating the Scrum board before the meeting.',
      'The Scrum Master loses the ability to update the Gantt chart properly.',
      'The Sprint Backlog may become inaccurate.'
    ],
    correctAnswer: [1, 2, 6]
  },
  {
    question: 'Which statement best describes Scrum?',
    answers: [
      'A defined and predictive process that confirms to the principles of Scientific Management.',
      'A complete methodology that defines how to develop software.',
      'A cookbook that defines best practices for software development.',
      'A framework within which complex products in complex environments are developed.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Which Scrum Values are exhibited by not building Product Backlog items that have low business value?',
    answers: [
      'Economic Value Added.',
      'Respect.',
      'Focus.',
      'Earned Value.',
      'Courage.'
    ],
    correctAnswer: [2, 3, 5]
  },
  {
    question:
      'How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?',
    answers: [
      'The Scrum Team with the highest velocity pulls Product Backlog items first.',
      'The Development Teams pull in work in agreement with the Product Owner.',
      'The Product Owner should provide each team with its own Product Backlog.',
      'Each Scrum Team takes an equal numbers of items.',
      'The Product Owner decides.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'How often should Development Team membership change?',
    answers: [
      'As needed, while taking into account a short term reduction in productivity.',
      'Never, because it reduces productivity.',
      'As needed, with no special allowance for changes in productivity.',
      'Every Sprint to promote shared learning.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Who should make sure everyone on the Development Team does his or her tasks for the Sprint?',
    answers: [
      'The Project Manager.',
      'The Product Owner.',
      'The Scrum Master.',
      'The Development Team.',
      'All of the above.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'When is it most appropriate for a Development Team to change the definition of "Done"?',
    answers: [
      'During Spring Planning.',
      'Prior to starting a new Sprint.',
      'During the Sprint Retrospective.',
      'Prior to starting a new project.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'As the Sprint Planning meeting progresses, the Development Team sees that the workload is greater than they can handle. Which two are valid actions?',
    answers: [
      'Recruit additional Development Team members before the work can begin.',
      'The Development Team ensures that the Product Owner is aware, starts the Sprint, and monitors progress.',
      'Cancel the Sprint.',
      'Remove or change selected Product Backlog items.',
      'The Development Team works overtime during this Sprint.'
    ],
    correctAnswer: [2, 4]
  },
  {
    question:
      'Currently, your Development Teams are organized to address a single layer only (for example, front end, middle tier, back end, and interfaces). What are three things to consider when deciding to move away from such component teams toward feature teams?',
    answers: [
      'You cannot do Scrum without feature teams.',
      'Productivity may suffer when making this kind of move.',
      'Getting support from the business side first helps.',
      'Feature teams have less communication overhead.',
      'With feature teams, it is easier to calculate the productivity per team.'
    ],
    correctAnswer: [2, 3, 4]
  },
  {
    question:
      'During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?',
    answers: [
      'When the Product Owner identifies new work.',
      'As soon as possible after they are identified.',
      'When the Scrum Master has time to enter them.',
      'During the Daily Scrum after the Development Team approves them.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'What is the main reason for the Scrum Master to be at the Daily Scrum?',
    answers: [
      'To gather status and progress information to report to management.',
      'To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.',
      'He or she does not have to be there; he or she only has to ensure the Development Team has a Daily Scrum.',
      'To make sure every team member answers the three questions.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "You have six teams using a traditional method to deliver a product. Your management has asked you to start using Scrum. In the initial project there were separate plans and teams for the layers of a software system, i.e. one for the frontend, one for the middle tier, one for the back-end, and one for the interfaces and services. This resembles what is known as component teams. But you have read that it's a good idea to have teams organized by feature. What are the advantages of keeping component teams while starting Scrum?",
    answers: [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best, and how to potentially re-organize towards this.",
      'Component teams generally have the skills needed to create a working Increment of software that provides business value.',
      'Because they have worked together for some time, they are likely able to start producing shippable Increments faster that new feature teams would.',
      'There are fewer cross-team dependencies than working in feature teams.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'True or False: A properly functioning Scrum Team will have at least one Release Sprint and may well have several.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Scrum is a methodology that tells in detail how to build software incrementally.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'For which is the Scrum Master responsible?',
    answers: [
      'Managing the performance of the Scrum Team.',
      'The meetings and the objectives that a Scrum Team sets for itself.',
      'The Scrum framework being adopted and used properly.',
      'Keeping track of resource allocation.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A Development Team asks their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a specific software component. Without that component there won't be enough work in the next Sprint to occupy the full team. The Product Owner asks the Scrum Master for help. What would be good advice to give the Product Owner?",
    answers: [
      'Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog.',
      'Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate sprint.',
      'Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Development Team.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'What are three ways Scrum promotes self-organization?',
    answers: [
      'By not allowing documentation.',
      'By the Development Team deciding what work to do in a Sprint.',
      'By preventing stakeholders from entering the development room.',
      'By removing titles for Development Team members.',
      'By being a lightweight framework.'
    ],
    correctAnswer: [2, 4, 5]
  },
  {
    question:
      'What is the key concern when multiple Development Teams are working from the same Product Backlog?',
    answers: [
      'Minimizing dependencies between teams.',
      'Clear definition of requirements.',
      'Meeting original scope projections.',
      "Making sure there's enough work for everyone on every team.",
      'Maximizing velocity.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'What does it mean to say that an event has a time-box?',
    answers: [
      'The event must happen at a set time.',
      'The event must happen by a given time.',
      'The event must take at least a minimum amount of time.',
      'The event can take no more than a maximum amount of time.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Which outcome is expected as Scrum Teams mature?',
    answers: [
      'They will improve their definition of "Done" to include more stringent criteria.',
      'The Sprint Retrospectives will grow to be longer than 4 hours.',
      'There is no need for a time-boxed Sprint, since time-boxes are only for new Scrum Teams.',
      'Sprint Reviews will no longer be needed.',
      'A Scrum Master is no longer needed since they are a mature team now.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The Product Owner must release each Increment to production.',
    answers: [
      'When it makes sense.',
      'To make sure the Development Team is done every Sprint.',
      'Whenever the product is free of defects.',
      'Without exception.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Who creates the definition of "Done"?',
    answers: [
      "The Scrum Master as he/she is responsible for the Development Team's productivity.",
      "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definition.",
      "The Product Owner as he/she is responsible for the product's success.",
      'The development organization (or Development Team if none is available from the development organization).'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Five new Scrum Teams have been created to build one product. A few of the developers on one of the Development Teams ask the Scrum Master how to coordinate their work with the order teams. What should the Scrum Master do?',
    answers: [
      'Teach the Product Owner to work with the lead developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint.',
      'Teach them that it is their responsibility to work with the other teams to create an integrated increment.',
      'Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.',
      'Visit the five teams each day to inspect that their Sprint Backlogs are aligned.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Which two things should the Development Team do during the first Sprint?',
    answers: [
      'Make up a plan for the rest of the project.',
      'Analyze, describe, and document the requirements for the subsequent Sprints.',
      'Develop at least one piece of functionality.',
      'Analyze, design, and describe the complete architecture and infrastructure.',
      'Create an increment of potentially releasable software.'
    ],
    correctAnswer: [3, 5]
  },
  {
    question:
      'Who determines when it is appropriate to update the Sprint Backlog during a Sprint?',
    answers: [
      'The Project Manager.',
      'The Development Team.',
      'The Scrum Team.',
      'The Product Owner.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Who must attend the Daily Scrum?',
    answers: [
      'The Scrum Master and Product Owner.',
      'The Development Team.',
      'The Development Team and Product Owner.',
      'The Scrum Team.',
      'The Development Team and Scrum Master.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'When do Development Team members take ownership of a Sprint Backlog item?',
    answers: [
      'At the Sprint planning meeting.',
      'During the Daily Scrum.',
      'Never. All Sprint Backlog Items are "owned" by the entire Development Team, even though each one may be done by an individual Development Team member.',
      'Whenever a team member can accommodate more work.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'The purpose of a Sprint is to produce a done Increment of product.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question:
      "In the Sprint Planning meeting, the Product Owner and the Development Team were unable to reach a clear understanding about the highest order Product Backlog items. Because of this, the Development Team couldn't figure out how many Product Backlog items it could forecast for the upcoming Sprint. They were able to agree on a Sprint Goal, however. Which of the following two actions should the Scrum Master support?",
    answers: [
      'Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint.',
      'Forecast the most likely Product Backlog items to meet the goal and create a Sprint Backlog based on a likely initial design and plan. Once the time-box for the Sprint Planning meeting is over, start the Sprint and continue to analyze, decompose, and create additional functionality during the Sprint.',
      'Continue the Sprint Planning meeting past its time-box until an adequate number of Product Backlog items are well enough understood for the Development Team to make a complete forecast. Then start the Sprint.',
      'Discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to recur.',
      'Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting.'
    ],
    correctAnswer: [2, 4]
  },
  {
    question:
      'Which answer best describes the topics covered in Sprint Planning?',
    answers: [
      'What to do and who will do it.',
      'How conditions have changed and how the Product Backlog should evolve.',
      'What can be done and how to do it.',
      'What went wrong in the last Sprint and what to do differently this Sprint.',
      'Who is on the team and what team member roles will be.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'Which of the following is required by Scrum?',
    answers: [
      'Sprint Retrospective.',
      'Members must be stand up at the Daily Scrum.',
      'Sprint Burndown Chart.',
      'Release planning.',
      'All of the above.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'What is the purpose of a Sprint Review?',
    answers: [
      'To take time to judge the validity of the project.',
      'To inspect the product increment with the stakeholders and collect feedback on next steps.',
      "To review the Scrum Team's activities and processes during the Sprint.",
      'To build team sprint.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'How should a Development Team deal with non-functional requirements?',
    answers: [
      'Ensure every Increment meets them.',
      "Make sure the release department understands these requirements, but it is not the Development Team's responsibility.",
      'Handle them during the Integration Sprint preceding the Release Sprint.',
      'Assign them to the lead developers on the team.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'When is a Sprint over?',
    answers: [
      'When the Product Owner says it is done.',
      'When all Product Backlog items meet their definition of "Done".',
      'When all the tasks are completed.',
      'When the time-box expires.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Scrum has a role called "Project Manager".',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Where are two good ways for the Development Team to make non-functional requirements visible?',
    answers: [
      'Put them on a separate list on the Scrum board, available for all to see.',
      'Add them to the Product Backlog and keep the Product Owner posted on the expected effort.',
      'Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.',
      'Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.',
      'Add them to the definition of "Done" so the work is taken care of every Sprint.'
    ],
    correctAnswer: [2, 5]
  },
  {
    question:
      'How much time is required after a Sprint to prepare for the next Sprint?',
    answers: [
      'The break between Sprints is time-boxed to 1 week for 30 day Sprints, and usually less for shorter sprints.',
      'Enough time for the requirements for the next Sprint to be determined and documented.',
      'Enough time for the Development team to finish the testing from the last Sprint.',
      'None. A new Sprint starts immediately following the end of the previous Sprint.',
      'All of the above are allowed depending on the situation.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'When many Scrum Teams are working on the same product, should all of their increments be integrated every Sprint?',
    answers: [
      'Yes, but only for Scrum Teams whose work has dependencies.',
      'Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done.',
      'No, each Scrum Team stands alone.',
      'No, that is far too hard and must be done in a hardening Sprint.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'When can a Development Team cancel a Sprint?',
    answers: [
      "It can't. Only Product Owners can cancel Sprints.",
      'When functional expectations are not well understood.',
      'When the Product Owner is absent too often.',
      'When the selected Product Backlog items for the Sprint become unachievable.',
      'When a technical dependency cannot be resolved.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Which output from Sprint Planning provides the Development Team with a target and overarching direction for the Sprint?',
    answers: [
      'The Sprint Backlog.',
      'The Sprint Goal',
      'The release plan.',
      'Sprint Review minutes.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate?',
    answers: [
      'The Scrum Team may add items to the Sprint Backlog for the next Sprint.',
      'The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.',
      'The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.',
      'The Scrum Master selects the most important process improvement and places it in the Sprint Backlog.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply?',
    answers: [
      'Involve the complete Scrum Team in making a decision.',
      'Use coaching techniques; such as open questions and active listening.',
      'Ask an external agile coach what they recommend.',
      "Ask team members to take the issue up with to the company's Human Resources department."
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'When many Scrum Teams are working on a single product, what best describes the Definition of Done?',
    answers: [
      'Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint.',
      'The Scrum Masters from each Scrum Team define a common Definition of Done.',
      'Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known.',
      'All Scrum Teams must have a Definition of Done that makes their combined work potentially releasable.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'At the seventh Sprint Review, the stakeholders are disappointed and angry. They have determined that the product or system being built will not meet their needs and will cost more than they are willing to spend. What factors likely led to this?',
    answers: [
      'The Project Management Office (PMO) has not been engaged adequately.',
      'The Product Owner has not been keeping the stakeholders aware of the progress of the project.',
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress.",
      'The stakeholders were not allowed to enter the development area.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'When a Development Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?',
    answers: [
      'The Development Team.',
      'The Product Owner and all stakeholders.',
      'The Product Owner and the Development Team.',
      'The Scrum Master, project manager and Development Team.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'As the Development Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?',
    answers: [
      'Inform the Product Owner at the Sprint Review, but prior to the demonstration.',
      'Find another Scrum Team to give the excess work to.',
      'As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items.',
      'Reduce the definition of "Done" and get all of the Product Backlog items "Done" by the new definition.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'Which of the following are roles on a Scrum Team?',
    answers: [
      'Users.',
      'Scrum Master.',
      'Product Owner.',
      'Development Team',
      'Customers.'
    ],
    correctAnswer: [2, 3, 4]
  },
  {
    question:
      'Which two activities will a Product Owner engage in during a Sprint?',
    answers: [
      'Run the Daily Scrum.',
      "Prioritize the Development Team's work on the Sprint Backlog.",
      'Update management on what is being worked on.',
      'Answer questions from the Development Team about items in the current Sprint.',
      'Work with the stakeholders.'
    ],
    correctAnswer: [4, 5]
  },
  {
    question:
      'Which three questions might be answered by Development Team members at the Daily Scrum?',
    answers: [
      'How is the Sprint proceeding?',
      'What did I do yesterday that helped the Development Team meet the Sprint Goal?',
      'Why were you late?',
      'What will I do today to help the Development Team meet the Sprint Goal?',
      'How many hours did I spend on the project yesterday?',
      'What will I be working on tomorrow?',
      'Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?'
    ],
    correctAnswer: [2, 4, 7]
  },
  {
    question:
      'What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?',
    answers: [
      'There are no such activities. The next Sprint starts immediately after the current Sprint.',
      'Refine the Product Backlog.',
      'Work with the Quality Assurance departments on the Increment of the current Sprint.',
      'Update the project plan with stakeholders.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?',
    answers: [
      'During the Daily Scrum',
      'Whenever a team member can accommodate more work.',
      'Never. The entire Scrum Team is accountable for creating value every Sprint.',
      'At the Sprint Planning Event.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'Which best describes the Product Backlog?',
    answers: [
      'It is allowed to grow and change as more is learned about the product and its customers.',
      'It provides just enough information to enable a Scrum team to start the design phase of a product.',
      'It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan.',
      'It is baselined to follow change management processes.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Who has the final decision about the order of items in the Product Backlog?',
    answers: [
      'The Stakeholders.',
      'The Product Owner.',
      'The Scrum Team.',
      'The Scrum Master.',
      'The Developers.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Which are properties of the Daily Scrum?',
    answers: [
      'It is facilitated by the team lead.',
      'It is held first thing in the morning.',
      'It is fifteen minutes or less in duration.',
      'It is free from and designed to promote conversation.',
      'It consists of the Scrum Master asking the Team members the three questions.',
      'Its location and time remain constant.'
    ],
    correctAnswer: [3, 6]
  },
  {
    question:
      'What is the accountability of the Product Owner during Sprint 0?',
    answers: [
      'There is no such thing as Sprint 0.',
      'Gathering, eliciting, and analyzing the requirements that will be inserted into the Product Backlog.',
      'Make the complete project plan to commit date, budget, and scope to the stakeholders.',
      'Determine the composition of the Development Teams so they have the capacity to deliver the completed forecast.',
      'Make sure enough Product Backlog items are refined to fill the first 3 Sprints.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'In accordance with Scrum theory, how should a group of 100 people be divided into multiple Development Teams?',
    answers: [
      'Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.',
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge.",
      'Check with the allocation department to see who has worked together before and make these the first teams.',
      'Create a matrix of skills, seniority, and level of experience to assign people to teams.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Who is accountable for tracking the remaining work toward the Sprint Goal?',
    answers: [
      'The Developers.',
      'The Scrum Master.',
      'The Product Owner.',
      'The Project Manager.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'When must a Product Owner release each Increment?',
    answers: [
      'When it makes sense.',
      'When the Scrum Team finishes their work.',
      'Whenever the product is free of defects.',
      'After every Sprint, Without exception.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'What are two good ways for a Scrum Team to ensure security concerns are satisfied?',
    answers: [
      'Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items.',
      'Add security concerns to the definition of "Done".',
      'Add a Sprint to specifically resolve all security concerns.',
      'Delegate the work to the concerned department.',
      'Have the Scrum Team create Product Backlog items for each concern.'
    ],
    correctAnswer: [2, 5]
  },
  {
    question: 'What is the recommended size for a Scrum Team?',
    answers: ['At least 7.', '9.', '10 or fewer.', '7 plus or minus 3.'],
    correctAnswer: [3]
  },
  {
    question: 'How do you know that a Development Team is cross-functional?',
    answers: [
      'Development Team has all the skills to create a potentially releasable increment by the end of every Sprint.',
      'A few of the Development Team members pair program and do Test Driven Development.',
      'There are no conflicts within the Development Team.',
      'Every member of the Development Team is able to perform every task.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Select two ways in which technical debt impacts transparency.',
    answers: [
      'When calculated and estimated, the total amount of technical debt shows exactly how long until the Product Owner can release the Increment.',
      'It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.',
      'As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways.',
      'It enhances transparency for the Product Owner as a Development Team is not allowed to do additional feature development in a Sprint as long as there is technical debt.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'A Development Team is required to deliver a done Increment by the end of a Sprint. Select two statements that explain what "Done" means.',
    answers: [
      'All work the Development Team is willing to do.',
      'Ready for integration.',
      'No work left from the definition of "Done".',
      'Whatever the Product Owner defines as quality.',
      'All work to create software that is ready to be released to end users.'
    ],
    correctAnswer: [3, 5]
  },
  {
    question: 'Which of the following are true about the length of the Sprint?',
    answers: [
      'The length of the Sprint should be proportional to the work that is done in between Sprints.',
      'It is best to have Sprints of consistent length throughout a development effort.',
      'Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing.',
      'Sprint length is determined during Sprint Planning, and should be long enough to make sure the Development Team can deliver what is to be accomplished in the upcoming Sprint.',
      'All Sprints must be 1 month or less.'
    ],
    correctAnswer: [2, 5]
  },
  {
    question: 'Developers include which role(s)?',
    answers: [
      'No other roles. Developers is one of the 3 accountabilities in Scrum.',
      'Testers.',
      'Business Analysts.',
      'Software Architects.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The Sprint Backlog must be detailed enough that...',
    answers: [
      'Every task is identified when the Sprint Backlog is first created.',
      'Changes in progress can be understood in the Daily Scrum.',
      'The Product Owner can understand what everyone is working on.',
      'Stakeholders can monitor progress at task level.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'The Scrum Master is accountable for the Product Backlog.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'A Scrum Team uses 2 weeks Sprints and time box their Sprint Planning to 6 hours. Does this break the rules of Scrum?',
    answers: ['False.', 'True.'],
    correctAnswer: [1]
  },
  {
    question:
      'Who is accountable for ensuring that the burn-down chart and gantt chart exist?',
    answers: [
      'No one.',
      'The Developers.',
      'The Product Owner.',
      'The Scrum Master.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'By the end of the Sprint Retrospective, the Scrum Team should have identified and planned improvements to increase its effectiveness.',
    answers: ['False.', 'True.'],
    correctAnswer: [2]
  },
  {
    question:
      'The Scrum Master is a leader and servant in service to which of the following?',
    answers: [
      'The organisation and Scrum Team.',
      'The Product Owner.',
      'The Developers.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The Product Owner manages...',
    answers: [
      'The Developers.',
      'The Scrum Team.',
      'The Project.',
      'The Product Backlog.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Management need to monitor progress on a daily basis and decide to do so by attending the Daily Scrum. What are the likely results?',
    answers: [
      'Management will be able to better direct the work of the Developers.',
      'Additional facilitation may be required to keep to the time-box.',
      'Developers may end up with less time in the Daily Scrum to re-plan their work.',
      'Developers may be less open and transparent during the Daily Scrum.'
    ],
    correctAnswer: [2, 3, 4]
  },
  {
    question: 'The Product Owner must attend the Sprint Retrospective.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question:
      'A Scrum Team must only work on a single Product Goal at any time.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question: 'The Definition of Done is a mandatory part of Scrum.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question: 'The Scrum Master must facilitate the Daily Scrum.',
    answers: ['False.', 'True.'],
    correctAnswer: [1]
  },
  {
    question:
      'Among the Developers, there is nobody with significant testing expertise. They should...',
    answers: [
      'Request for a specialist tester to join them and queue testing for them to do when they arrive in a later Sprint.',
      'Produce an Increment that will be tested by a dedicated test team after the Sprint to guarantee the quality.',
      'Raise this as an impediment which may require the assistance of the Scrum Master to resolve.',
      'Quality is the responsibility of the Developers and they should undertake testing themselves to the best of their abilities.'
    ],
    correctAnswer: [3, 4]
  },
  {
    question:
      'The Sprint Planning event is comprised of 2 parts and the Product Owner is not needed at the 2nd part.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'Product Backlog refinement is...',
    answers: [
      'Carried out once per Sprint.',
      'A Scrum event.',
      'The concern of the Product Owner.',
      'An ongoing process in which the Product Owner and the Developers collaborate.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'An Increment is...',
    answers: [
      'All work that has happened up to the current point in time.',
      'All work completed up to now, where there are no bugs present.',
      'All work that was carried out in the Sprint.',
      'The sum of the Done work during a Sprint, plus the work Done in earlier Sprints.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Which statement best describes a cross-functional team?',
    answers: [
      'The team has all competencies needed to accomplish the work.',
      'The team has a good mix of skills.',
      'All members of the team have all the skills required to create the Product.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The result of the Sprint Review is...',
    answers: [
      'Incomplete Product Backlog Items have been reviewed and returned to the top of the Product Backlog.',
      'The Increment has been demonstrated to Stakeholders.',
      'A revised Product Backlog that defines the probable Product Backlog items for the next Sprint.',
      'Acceptance (or rejection) of all Product Backlog Items.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'The Product Owner is using burn-up charts instead of burn-down charts. What would your response be as Scrum Master?',
    answers: [
      "There's nothing wrong with it.",
      'Burn-up charts are used in traditional methods and should be replaced by burn-down charts.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The Scrum Master manages the Scrum Team.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'The Scrum Master is responsible for?',
    answers: [
      'Delivering the Product on budget and to the agreed schedule.',
      'Ensuring Scrum is understood.',
      'Solving all impediments, blockers & issues.',
      'Coordinating the work of the Developers.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'A Scrum Team has how many specific accountabilities?',
    answers: ['1.', '4.', '2.', '3.'],
    correctAnswer: [4]
  },
  {
    question:
      'Who is responsible for monitoring the progress of work during a Sprint?',
    answers: [
      'Project Manager.',
      'Product Owner.',
      'Scrum Master.',
      'Developers.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'During Sprint Planning, every task must be estimated so the Developers can be sure they have the capacity to complete them in the Sprint.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Who may be best positioned to decide who will be the Scrum Master for a new Scrum Team?',
    answers: [
      'The Developers and the Product Owner.',
      'The Developers.',
      'The Product Owner.',
      'Stakeholders.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'The Daily Scrum is consistently taking longer than 15 minutes. Which statement best describes what should be done?',
    answers: [
      'A 2nd Daily Scrum should be held at the end of the day.',
      'The Scrum Master should help the Developers understand why the 15 minute time-box should be respected and help them find ways to do it as required.',
      'Developers should leave at the end of the 15 minutes.',
      'The Developers should take the additional time that they need in the Daily Scrum.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'A Scrum Team must be 10 or fewer people.',
    answers: ['False.', 'True.'],
    correctAnswer: [1]
  },
  {
    question: 'A Scrum Team must never have any technical debt.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'During Sprint Planning, all Product Backlog Items must be decomposed to a definitive set of tasks for the Developers to complete.',
    answers: ['False.', 'True.'],
    correctAnswer: [1]
  },
  {
    question: 'The Increment must be released at the end of every Sprint.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Developers should be set stretch goals by the Product Owner as part of Sprint Planning.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'During the Daily Scrum, the Developers must answer the "3 questions".',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'Select the correct timebox for each Scrum event.',
    answers: [
      'Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.',
      'Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 4 hours.',
      'Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours.',
      'Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'The Scrum Master can be removed once Scrum is adopted.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question:
      'Who can do the work to ensure the Product Backlog is refined to a state that it is useful?',
    answers: [
      'The Business Analyst.',
      'Stakeholders.',
      'The Developers, with support from the Product Owner who is still accountable for it.',
      'The Product Owner.'
    ],
    correctAnswer: [3, 4]
  },
  {
    question: 'The purpose of the Sprint Review is...',
    answers: [
      'To show Stakeholders work that is done and work that is near to completion.',
      'To inspect the outcome of the Sprint and determine future adaptations.',
      'To review the status of the Project.',
      'To check what was done and not done during the Sprint.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Who can change the Sprint Backlog during a Sprint?',
    answers: [
      'The Scrum Master.',
      'The Developers.',
      'The Product Owner.',
      'The Stakeholders.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Before the first Sprint, the Product Backlog must contain everything we will develop for the product.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'A Product Backlog is never complete.',
    answers: [
      'False - A complete Product Backlog should be created before starting the first Sprint.',
      'True - As long as a product exists, its Product Backlog also exists.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A new Developer joins the Scrum Team taking the total number to 11 people. As a Scrum Master, What should you do?',
    answers: [
      'Instruct the Developers to split into 2 teams.',
      'Do nothing, the Developers must fix its own issues.',
      'Instruct the Developers to split into 2 teams, they should decide the appropriate sizes.',
      'Raise the increased team size as a potential issue and help the Developers decide what to do about it.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'The three pillars of empiricism are:',
    answers: [
      'Respect For People, Kaizen, Eliminating Waste.',
      'Planning, Inspection, Adaptation',
      'Planning, Demonstration, Retrospective',
      'Inspection, Transparency, Adaptation',
      'Transparency, Eliminating Waste, Kaizen.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Upon what type of process control is Scrum based?',
    answers: ['Hybrid', 'Empirical', 'Defined', 'Complex'],
    correctAnswer: [2]
  },
  {
    question:
      'It is mandatory that the product Increment be released to production at the end of each Sprint.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'The timebox for the Sprint Review is:',
    answers: [
      '2 hours.',
      '1 day.',
      '4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
      '4 hours and longer as needed.',
      'As long as needed.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "Which statement best describes a Product Owner's responsibility?",
    answers: [
      'Keep stakeholders from distracting the Developers.',
      'Optimizing the value of the work the Scrum Team does.',
      'Managing the project and ensuring that the work meets the commitments to the stakeholders.',
      'Directing the Developers.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'Why is the Daily Scrum held at the same time and same place?',
    answers: [
      'The place can be named.',
      'Rooms are hard to book and this lets it be booked in advance.',
      'The consistency reduces complexity.',
      'The Product Owner demands it.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'A Scrum Team consists of the following',
    answers: [
      'Users',
      'Product Owner',
      'Customers',
      'Developers',
      'Scrum Master'
    ],
    correctAnswer: [2, 4, 5]
  },
  {
    question:
      'The purpose of a Sprint is to produce a valuable and useful Increment of working product.',
    answers: ['True.', 'False.'],
    correctAnswer: [1]
  },
  {
    question: 'The timebox for the Sprint Planning event is?',
    answers: [
      '4 hours',
      'Monthly',
      '8 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
      'Whenever itis done.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'What is the function or purpose of Management in Scrum?',
    answers: [
      'Identify and remove people that are not working hard enough',
      'Monitor the progress of the Developers on the Scrum Team',
      'Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to encourage organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent product delivery.',
      'Continually monitor staffing levels of the Scrum Team.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'What is the typical size for a Scrum Team?',
    answers: ['10 or fewer.', 'Minimum of 7.', '7 plus or minus', '9'],
    correctAnswer: [1]
  },
  {
    question:
      'An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?',
    answers: [
      'Without a new vocabulary as a reminder of the change, very little change may actually happen',
      'The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost',
      'Management may feel less anxious',
      'All of the above'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team?',
    answers: [
      'The Developers have all the skills they need to create a valuable, useful Increment',
      "StakeNolders attend the Daily Scrum to check on the Scrum Team's progress.",
      'The Developers create their own Sprint Backlog, reflecting all work that i required to meet the Definition of Done.',
      'The Developers are collaboratively selecting their own work during the Sprint',
      'The Developers invite external stakeholders to the Sprint Planning tosk them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog',
      'The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to developer to tester to integration'
    ],
    correctAnswer: [2, 5, 6]
  },
  {
    question:
      'How much work must the Developers complete for each Product Backlog item they select for a Sprint?',
    answers: [
      'All development work and at least some testing',
      'Enough so that each Product Backlog item they select meets the Definition of Done.',
      'Analysis, design, programming, testing and documentation',
      'As much as it can fit into the Sprint'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog items selected?',
    answers: [
      'The Product Owner and all stakeholders',
      'The Scrum Master, the project manager, and the Developers',
      'The Product Owner and the Developers.',
      'The Developers.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?',
    answers: [
      'The Product Owner',
      'The Project Manager',
      'The Developers',
      'The Scrum Master'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Which one of the following answers is FALSE?',
    answers: [
      'The Product Owner can help clarify or optimize the Sprint when asked by the Developers.',
      'The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected.',
      'The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint.',
      'As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'When does the next Sprint begin?',
    answers: [
      'Next Monday.',
      'Immediately after the conclusion of the previous Sprint.',
      'Immediately following the next Sprint Planning.',
      'When the Product Owner is ready.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'What are two ways a Scrum Master serves to enable effective Scrum Teams?',
    answers: [
      'By facilitating Developer decision-making.',
      'By keeping high value features high in the Product Backlog',
      'By removing impediments that hinder the Scrum Team.',
      'By starting and ending the meetings at the proper time.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'The CEO asks the Developers to add a "very important" item to a Sprint that is in progress. What should the Developers do?',
    answers: [
      'Add the item to the next Sprint.',
      'Inform the other members of the Scrum Team so the team can decide what to do',
      'Add the item to the current Sprint without any adjustments.',
      'Add the item to the current Sprint and drop an item of equal size.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.',
    answers: ['True.', 'False.'],
    correctAnswer: [2]
  },
  {
    question: 'When does a Sprint conclude?',
    answers: [
      'When the Product Owner decides enough has been delivered to meet the Sprint Goal.',
      'When the Sprint Retrospective is complete.',
      'When all the tasks are completed by the Developers.',
      'When all Product Backlog items meet their Definition of Done.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Which agile aspect refuses what is often considered a “necessary evil” in many industries – long work hours, overtime, or even working nights or weekends?',
    answers: [
      'Continuous Delivery.',
      'Small releases.',
      'DevOps.',
      'Sustainable pace.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'What does the Cone of Uncertainty present?',
    answers: [
      'The dependencies, resources, and estimated effort for a project’s tasks and budget.',
      "How the product's knowledge evolves.",
      'The project schedule.',
      'The remaining work for a project.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Scrum is both an incremental and iterative agile way of delivering work.',
    answers: ['True', 'False'],
    correctAnswer: [1]
  },
  {
    question: 'What is Scrum founded on?',
    answers: [
      'Lean Thinking and Scientific Management',
      'Just In Time Principles and Rapid Application Development',
      'Empiricism and Lean Thinking',
      'Extreme Management and Lean Canvas',
      'Adaptive Learning and Agility'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'Which Scrum value is manifested when an information radiator such as a burndown, burnup, or cumulative flow chart is made available so that everyone can see it?',
    answers: [
      'Adaptation',
      'Simplicity',
      'Openness',
      'Transparency',
      'Communication'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'What statement best describes the Product Owner’s accountability?',
    answers: [
      'Defining the work to be performed by the Developers.',
      'Maximizing the value of the product resulting from the work of the Scrum Team. ',
      'Estimating the effort of each Product Backlog item.',
      'Describing each Product Backlog item following the Definition of Ready.'
    ],
    correctAnswer: [2]
  },
  {
    question: 'What is the role of Management in Scrum?',
    answers: [
      `Procurement management, making sure that the Scrum Team follows the contract's terms.`,
      'Make sure that the project’s budget is being used as planned.',
      `Monitor the Scrum Team's productivity and deliverables' quality.`,
      'Embrace bottom-up intelligence by providing information to the Scrum Team, supporting its empiricism, and trusting it to learn about the problem at hand.'
    ],
    correctAnswer: [4]
  },
  {
    question: 'Which of the below are accountabilities on a Scrum Team?',
    answers: [
      'Product Manager, Scrum Master, Testers, Developers',
      'Project Manager, Product Manager, Development Team',
      'Product Owner, Scrum Master, Developer',
      'Product Owner, Project Manager, Scrum Master',
      'Chicken and Pigs'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'What is the primary service that the Scrum Master provides to help the Developers maximize their productivity?',
    answers: [
      'Update the burndown chart daily.',
      'Ensure that the meetings are executed during the planned schedule and time-box.',
      'Facilitate decisions of the Developers',
      'Ensure the task management tools (such as Jira) are updated.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'The Developers should have all the skills needed to:',
    answers: [
      'Create a product Increment.',
      'Deliver a product Increment, except for specialized quality control that requires specialized skills or resources.',
      'Deliver all the work committed to the Product Owner within the project plan’s date and cost.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'The Scrum Master is a manager.',
    answers: ['True', 'False'],
    correctAnswer: [1]
  },
  {
    question:
      'True or False: The only Product Backlog items that the Scrum Team can select during Sprint Planning are the ones considered Ready (i.e., can be done within one Sprint).',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question:
      'True or False: The Product Goal represents the desired end state whenever all the Product Backlog items must be "Done."',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question: 'Which statement best describes a Product Backlog?',
    answers: [
      'Large Product Backlog items are described as Epics and smaller ones as User Stories.',
      'Product Backlog items include test descriptions that prove their completeness when “Done.”',
      'An emergent ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'True or False: The Product Backlog might commit to a Product Goal.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question:
      'True or False: An Increment can only be released after a Sprint is over.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question: `True or False: If the Definition of Done for an Increment is part of the organization's standards, all Scrum Teams must follow it as a minimum.`,
    answers: ['True', 'False'],
    correctAnswer: [1]
  },
  {
    question: 'Which of the following best describes the Increment?',
    answers: [
      'The Increment cannot be released during the Sprints; the Product Owner must wait for the Sprint to be over to release it.',
      'The Increment is released at the end of every Sprint.',
      'The moment a Product Backlog item meets the Definition of Done, an Increment is born.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'Who creates the Definition of Done?',
    answers: [
      `The Product Owner as he/she is responsible for the product's success`,
      `The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions`,
      'The development organization (or Scrum Team if none is available from the development organization)',
      `The Scrum Master as he/she is accountable for the Scrum Team’s effectiveness.`
    ],
    correctAnswer: [3]
  },
  {
    question:
      'True or False: The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).',
    answers: ['True', 'False'],
    correctAnswer: [1]
  },
  {
    question:
      'True or False: The work planned during Sprint Planning must be decomposed into one day or fewer units.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question:
      'True or False: The Scrum Master defines the Sprint Goal during Sprint Planning.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question:
      'What is the time-box for the Sprint Planning for a two weeks Sprint?',
    answers: ['2 hours', '4 hours', '8 hour or less', 'As long as needed'],
    correctAnswer: [3]
  },
  {
    question:
      'During a Sprint, the CEO asks the Developers to add work on something critical not part of the Sprint Backlog. What should the Developer do?',
    answers: [
      'Add the item to the current Sprint without any adjustments.',
      'Add the item to the current Sprint and drop an item of equal size.',
      'Inform the Product Owner so the Product Owner can handle the request of the CEO.',
      'Add the item to the next Sprint.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'The Sprint Backlog is a plan by and for the Developers. (Which of the following statement is FALSE?)',
    answers: [
      'An output of the Sprint Planning is the Sprint Backlog, which consists of all the tasks to be executed during the Sprint.',
      'The Developers may ask the Product Owner for clarifications during the Sprint.',
      'The Sprint Backlog is emergent.',
      'Work can be removed or added through the collaboration between the Developers and the Product Owner.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'When does a Developer become the owner of a work unit (i.e., work item, task, technical task, or task card)?',
    answers: [
      'When the Developer can accommodate more work.',
      'At the Sprint Planning event.',
      'Never.',
      'During the Daily Scrum.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).(Which of the following sentences is FALSE?)',
    answers: [
      'The Sprint Backlog makes all of the work that the Developers identify as necessary to meet the Sprint Goal.',
      'The Developers modify the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint.',
      'The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum.',
      'The Developers commit to the Sprint Backlog.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'True or False: The Sprint Review is a formal meeting for demonstrating the Increment.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question: 'Which statement best describes the Sprint Review?',
    answers: [
      'It is when management verifies the work that was completed.',
      'It is when Scrum Team demonstrates the work that was completed.',
      'The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'The Sprint Retrospective is time-boxed to:',
    answers: [
      '2 hours',
      '4 hours',
      'As long as needed',
      '3 hours for a monthly Sprint. For shorter Sprints it is usually shorter.',
      '3 hours'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'True or False: The Scrum Team must choose at least one high-priority process improvement, identified during the Sprint Retrospective, and place it in the Sprint Backlog.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question: 'Which statement best describes the Sprint Retrospective?',
    answers: [
      'It is an opportunity for the Scrum Team to plan ways to increase quality and effectiveness.',
      'It is a time to inspect the Scrum Team’s progress toward the Sprint Goal.',
      'It is a mechanism for the management to inspect the Scrum Team’s progress toward the Sprint Goal.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'Who must participate in Sprint Retrospectives?',
    answers: [
      'The Scrum Master',
      'The Product Owner',
      'The Developers',
      'The Scrum Team',
      'The Scrum Team and the stakeholders'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'True or False: When multiple teams work together on the same product, each team has its Product Owner. Therefore, it is possible to have multiple Product Owners for the same product.',
    answers: ['True', 'False'],
    correctAnswer: [2]
  },
  {
    question:
      'Who describes the Definition of Done in the case of multiple Scrum Teams working on a single product?',
    answers: [
      'It depends on the type of the product.',
      'The Scrum Master',
      'Each Scrum Team defines its own Definition of Done.',
      'All Scrum Teams must mutually agree upon a shared Definition of Done.'
    ],
    correctAnswer: [4]
  }
]
