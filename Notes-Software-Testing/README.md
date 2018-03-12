# Foundation of Software Testing

`Testing` - the process consisting of all life cycle, both static and dynamic, concerned with planning, preparation and evaluation of software products and related work products to determine that they satisfy specified requirements to demonstrate that they are fit for purpose and to detect defects.
  1. `Static testing` - testing of components/system at specification or implementation level without execution of that software(review and analysis of a code).
  2. `Dynamic testing` - testing that involves the execution of the software of component or system.
  
`Pesticide paradox` - if the same tests are repeated over and over again, eventually the same set of test cases will no longer find any new bugs. To overcome this 'pesticide paradox', the test cases need to be regularly reviewed and revised, and new different tests need to be written to exercise different parts of the software or system to potentially find more defects. 

### Testing principles:

| Number  | Definition  | Description  |
---|---|---
| P 1:  | Testing shows presence of defects  | Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness  |
| P 2:  | Exhaustive testing is impossible  | Testing everything(all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, risk analysis and priorities should be used to focus on testing efforts  |
| P 3:  | Early testing  | Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives  |
| P 4:  | Defect clustering  | A small number of modules contain the most of the defects discovered during prerelease testing or are responsible for the most operational failures  |
| P 5:  | Pesticide Paradox  | Look the definition above  |
| P 6:  | Testing is context dependent  | Testing code is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site  |
| P 7:  | Absence-of-errors fallacy  | Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs expectations  |

### Test planning and control

`Test plan` - a document describing the scope, approach, resources and schedule of intended test activities. It determs test items, the features to be tested, testing tasks and who will do each task, the test environment, the design techniques. It is a record of the test planning process.

`Test policy` - a high-level document describing the principles, approach and major objectivites of the organization regarding testing.

`Test strategy` - a high-level description of the test levels to be performed and the testing within those levels for an organization or program.

`Test approach` - the implementation of the test stratagy for a specific project.

`Test coverage` - the degree, expressed as a percentage, to which a specified coverage item has been exercised by a test suite.

### V-model

`V-model` - a framework to describe the software development life cycle activities from requirements specification to maintenance. The V-model illustrates how testing activities can be integrated into each phase of the software development life cycle.

### Testing types

`Unit/Component testing` - searches fo defects in individual software components.

`Robustness testing` - determes the robustness of the system product.

`Integration testing` - testing performed to expose defects in the interfaces and in the iteration between integrated components or systems.

`System testing` - the process of testing an integrated system to verify that it meets specified requirements.

`Acceptance testing` - formal testing with respect to user needs, requirements and business processes conducted to determine whether or not a system satisfies the acceptance criterea and to enable the users, customers or other authorized entity to determine whether or not to accept the system.

`Alpha testing` - simulated or actual testing by potential users/customers or an independent test team at the developers' site, but outside the development organization.

`Beta testing` - operational testing by potential users/customers at an external site not otherwise involved with the developers, to determine whether or not a component or system satisfies the users/customers needs and fits within the business processes.

`Functional testing` - testing based on analysis of the specification of the functionality of a component or system.

`Black-box testing` - testing either functional or non-functional, without reference to the internal structure of the component system.

`Functionality testing` - the process of testing to determine the functionality of a software product. 

`Interoperability testing` - the process of testing to determine the interoperability of a software product.

`Secure testing` - testing to determine the security of the software product.

`Load testing` - a test type concerned with measuringthe behaviour of a component or system with increasing load(number of transactions, parallel users) to determine what load can be handled by the component or system.

`Performance testing` - the process of testing to determine the performance.

`Stress testing` -  testing conducted to evaluate a system or component at or beyond the limits of its specified requirements.

`Reliability testing` - the process of tecting to determine the reliability(the ability to perform its reqired functions under stated conditions for a specified period of time) of a software product.

`Usability testing` - testing to determine the extent of which the software product is understood, easy to learn, easy to operate and attractive to the users under specified conditions.

`Efficiency testing` - the process of testing to determine the efficiency(capability to provide appropriate performance, relative to the amount of the resources used under stated conditions) of a software product.

`Portability testing` - the process of testing to determine the portability(the ease with which the software can be transfered from one hardware/software envirinment to another) of a software product.

`Maintenance testing` - maintenance(modification of a software product after delivering to correct defects, to improve performance or other attributes, or to adapt the product to a modified encironment) tecting the changes to an operational system or the impact of a changed encironment to an operational system.

`Maintainability testing` - the process of testing to determine the maintainability(the ease with which a software product can be modified to correct defects, to meet new requirements to make future maintenance easier) of a software product.

## Phases of a formal review

  1. Planning
  2. Kick-off
  3. Preparation
  4. Review meeting
  5. Rework
  6. Follow up
  
**Planning** - the review process begins with a `request for review` by the author to moderator(leader and main person responsible for an instection or other review process). Moderator is often responsible for scheduling(dates, times, place and invitations) of a review. On a project level, the project planning needs to allow time for review and rework activities, thus providing engineers with time to thoroughly participate in reviews. 

For formal reviews moderator always performs an `entry check` and defines at this stage formal exit criteria. The entry check is carried out to ensure that the reviewers' time is not wasted on a document that is not ready for a review. A document containing too many obvious mistakes is clearly not ready to enter a formal review process and it can be very harmful to the review process. It would possibly de-motivate both reviewers and author.

Minimum set for performing the entry check:
 
  1. A short check of a product sample by the modirator does not reveal a large number of a major defects.
  2. The document to be reviewed is available with line numbers.
  3. The document has been cleaned up by running any automated checks that apply.
  4. References needed for the inspection are stable and available.
  5. The document author is prepared to join the review team and feels confident with the quality of the document.
  6. Maximum size between 10 and 20 pages.
  
Review team usually consists of 4-6 participants, including moderator and author. To improve the effectiveness of the review, moderator determines the roles.

**Kick-off** - 

**Preparation** - 

**Review meeting** - 

**Rework** - 

**Follow up** - 

## References
  1. Graham D., Van Veenendaal E., Evans I., Black R. Foundation of Software Testing | ISTQB Certification, 2008, https://www.amazon.com/Foundations-Software-Testing-ISTQB-Certification/dp/1844809897/ref=sr_1_1?s=books&ie=UTF8&qid=1520879066&sr=1-1&keywords=9781844809899
