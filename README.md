###Contributors Guide

1. Fork TransitPal/Commutr to contribute
2. Add upstream remote

    git remote add https://github.com/TransitPal/Commutr.git

3. Before pushing to personal fork*:

    git pull --rebase upstream dev

4. Push to personal fork:

    git push origin master

5. Submit pull request to TransitPal/Commutr dev branch.  Dev branch is used as a staging area for new features. Master branch will always be the official working release, as it is auto-deployed to commutr.azurewebsites.net.


* Rebase from upstream dev is also required after every new feature announcement


###Style Guide

Keep all commits in present tense (e.g. 'implements', 'creates', 'adds').
Do not use a period at the end of commits.
Extensive style guide found [here](https://github.com/hackreactor/curriculum/wiki/Style-Guide).