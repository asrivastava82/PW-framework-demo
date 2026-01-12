# Page snapshot

```yaml
- generic [ref=e1]:
  - status
  - main [ref=e3]:
    - generic [ref=e6]:
      - heading "Admin area demo" [level=1] [ref=e8]
      - generic [ref=e9]:
        - generic [ref=e12]:
          - strong [ref=e14]: Welcome, please sign in!
          - generic [ref=e15]:
            - generic [ref=e16]:
              - generic [ref=e17]: "Email:"
              - textbox "Email:" [active] [ref=e18]: admin@yourstore.com
            - generic [ref=e19]:
              - generic [ref=e20]: "Password:"
              - textbox "Password:" [ref=e22]: admin
            - generic [ref=e24]:
              - checkbox "Remember me?" [ref=e25]
              - generic [ref=e26]: Remember me?
          - button "Log in" [ref=e28] [cursor=pointer]
        - generic [ref=e29]:
          - heading "Defaults for admin area" [level=2] [ref=e31]
          - generic [ref=e33]:
            - paragraph [ref=e34]: "Admin email: admin@yourstore.com"
            - paragraph [ref=e35]: "Admin password: admin"
```