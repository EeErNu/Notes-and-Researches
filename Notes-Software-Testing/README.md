# Foundation of Software Testing

**Testing** - the process consisting of all life cycle, both static and dynamic, concerned with planning, preparation and evaluation of software products and related work products to determine that they satisfy specified requirements to demonstrate that they are fit for purpose and to detect defects.
  1. **Static testing** - testing of components/system at specification or implementation level without execution of that software(review and analysis of a code).
  2. **Dynamic testing** - testing that involves the execution of the software of component or system.
  
**Pesticide paradox** - if the same tests are repeated over and over again, eventually the same set of test cases will no longer find any new bugs. To overcome this 'pesticide paradox', the test cases need to be regularly reviewed and revised, and new different tests need to be written to exercise different parts of the software or system to potentially find more defects. 

Testing principles

| Number  | Definition  | Description  |
---|---|---
| P 1:  | Testing shows presence of defects  | Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness  |
| P 2:  | Exhaustive testing is impossible  | Testing everything(all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, risk analysis and priorities should be used to focus on testing efforts  |
| P 3:  | Early testing  | Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives  |
| P 4:  | Defect clustering  | A small number of modules contain the most of the defects discovered during prerelease testing or are responsible for the most operational failures  |
| P 5:  | Pesticide Paradox  | Look the definition above  |
| P 6:  | Testing is context dependent  | Testing code is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site  |
| P 7:  | Absence-of-errors fallacy  | Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs expectations  |

## References
  1. Graham D., Van Veenendaal E., Evans I., Black R. Foundation of Software Testing | ISTQB Certification, 2008, https://www.amazon.com/Foundations-Software-Testing-ISTQB-Certification/dp/1844809897/ref=sr_1_1?s=books&ie=UTF8&qid=1520879066&sr=1-1&keywords=9781844809899
