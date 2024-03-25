import parser_class

# main class to start parser_class
def main():
    # import class
    parser = parser_class.Parser()
    parser.login()
    parser.logbook_request()
    parser.logbook_request()
    parser.logout()

if __name__ == "__main__":
    main()