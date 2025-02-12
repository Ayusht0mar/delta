
export const languages = {
      "html": "HTML",
    "css": "CSS",
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "python": "Python",
    "java": "Java",
    "c": "C",
    "cpp": "C++",
    "c#": "C#",
    "php": "PHP",
    "ruby": "Ruby",
    "go": "Go",
    "rust": "Rust",
    "swift": "Swift",
    "kotlin": "Kotlin",
    "dart": "Dart",
    "scala": "Scala",
    "haskell": "Haskell",
    "lua": "Lua",
    "shell": "Shell",
    "sql": "SQL",
    "r": "R",
    "julia": "Julia",
    "perl": "Perl",
    "matlab": "Matlab",
    "elixir": "Elixir",
    "scheme": "Scheme",
    "ocaml": "OCaml",
    "cobol": "COBOL",
    "fortran": "Fortran",
    "pascal": "Pascal",
    "assembly": "Assembly",
    "objective-c": "Objective-C",
    "erlang": "Erlang",
    "f#": "F#",
    "d": "D",
    "clojure": "Clojure",
    "groovy": "Groovy"
}

export const fonts = {
    jetBrainsMono: {
      name: "JetBrains Mono",
      src: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",
    },
    inconsolata: {
      name: "Inconsolata",
      src: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
    },
    firaCode: {
      name: "Fira Code",
      src: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    },
    cascadiaCode: {
      name: "Cascadia Code",
      src: "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.2.1/index.min.css",
    },
    victorMono: {
      name: "Victor Mono",
      src: "https://fonts.googleapis.com/css2?family=Victor+Mono&display=swap",
    },
    sourceCodePro: {
      name: "Source Code Pro",
      src: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap",
    },
    ibmPlexMono: {
      name: "IBM Plex Mono",
      src: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",
    },
    robotoMono: {
      name: "Roboto Mono",
      src: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
    },
    ubuntuMono: {
      name: "Ubuntu Mono",
      src: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap",
    },
    spaceMono: {
      name: "Space Mono",
      src: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
    },
    courierPrime: {
      name: "Courier Prime",
      src: "https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap",
    },
    anonymousPro: {
      name: "Anonymous Pro",
      src: "https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap",
    },
    oxygenMono: {
      name: "Oxygen Mono",
      src: "https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap",
    },
    redHatMono: {
      name: "Red Hat Mono",
      src: "https://fonts.googleapis.com/css2?family=Red+Hat+Mono&display=swap",
    },
  }


export const codeSnippets = [
    {
      language: "html",
      code: '<!DOCTYPE html>\n<html>\n<head><title>Hello</title></head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>',
    },
    {
      language: "css",
      code: "body {\n  font-family: Arial, sans-serif;\n  color: blue;\n}",
    },
    {
      language: "javascript",
      code: "const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};\nconsole.log(fibonacci(10));",
    },
    {
      language: "typescript",
      code: "let message: string = 'Hello, World!';\nconsole.log(message);",
    },
    {
      language: "python",
      code: "def is_prime(n):\n  if n <= 1:\n    return False\n  for i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n      return False\n  return True",
    },
    {
      language: "java",
      code: "import java.util.stream.IntStream;\n\nclass StreamExample {\n  public static void main(String[] args) {\n    IntStream.rangeClosed(1, 5).forEach(System.out::println);\n  }\n}",
    },
    {
      language: "c",
      code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n      printf("%d\\n", i);\n    }\n  }\n  return 0;\n}',
    },
    {
      language: "cpp",
      code: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',
    },
    {
      language: "c#",
      code: "using System;\nusing System.Linq;\n\nclass LINQExample {\n  static void Main() {\n    int[] numbers = { 3, 9, 2, 8, 6 };\n    var evenNumbers = numbers.Where(n => n % 2 == 0);\n    foreach (var num in evenNumbers) {\n      Console.WriteLine(num);\n    }\n  }\n}",
    },
    {
      language: "php",
      code: "<?php\n$fruits = ['apple', 'banana', 'cherry'];\n$uppercased = array_map('strtoupper', $fruits);\nprint_r($uppercased);\n?>",
    },
    {
      language: "ruby",
      code: 'class Animal\n  attr_reader :name\n\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    raise NotImplementedError, "Subclasses must implement this method"\n  end\nend',
    },
    {
      language: "go",
      code: 'package main\n\nimport (\n  "fmt"\n  "math"\n)\n\nfunc main() {\n  x := 4.0\n  y := math.Sqrt(x)\n  fmt.Printf("Square root of %.2f is %.2f\\n", x, y)\n}',
    },
    {
      language: "rust",
      code: 'fn main() {\n  let mut count = 0;\n  loop {\n    println!("Count: {}", count);\n    count += 1;\n    if count > 5 {\n      break;\n    }\n  }\n}',
    },
    {
      language: "swift",
      code: "enum Compass {\n  case north, south, east, west\n}\nlet currentDirection = Compass.east\nprint(currentDirection)",
    },
    {
      language: "kotlin",
      code: "fun main() {\n  println(\"Hello, World!\")\n}",
    },
    {
      language: "dart",
      code: "void main() {\n  print(\"Hello, World!\");\n}",
    },
    {
      language: "scala",
      code: "object Main extends App {\n  println(\"Hello, World!\")\n}",
    },
    {
      language: "haskell",
      code: "main = putStrLn \"Hello, World!\"",
    },
    {
      language: "lua",
      code: "print(\"Hello, World!\")",
    },
    {
      language: "shell",
      code: "echo \"Hello, World!\"",
    },
    {
      language: "sql",
      code: "SELECT 'Hello, World!';",
    },
    {
      language: "r",
      code: "print(\"Hello, World!\")",
    },
    {
      language: "julia",
      code: "println(\"Hello, World!\")",
    },
    {
      language: "perl",
      code: "print \"Hello, World!\\n\";",
    },
    {
      language: "matlab",
      code: "disp('Hello, World!')",
    },
    {
      language: "elixir",
      code: "IO.puts(\"Hello, World!\")",
    },
    {
      language: "scheme",
      code: "(display \"Hello, World!\") (newline)",
    },
    {
      language: "ocaml",
      code: "print_endline \"Hello, World!\"",
    },
    {
      language: "cobol",
      code: "IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\n  DISPLAY \"Hello, World!\".\n  STOP RUN.",
    },
    {
      language: "fortran",
      code: "PROGRAM HelloWorld\n  PRINT *, 'Hello, World!'\nEND PROGRAM HelloWorld",
    },
    {
      language: "pascal",
      code: "program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend.",
    },
    {
      language: "assembly",
      code: "section .data\n  hello db \"Hello, World!\", 0\nsection .text\n  global _start\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, hello\n  mov rdx, 13\n  syscall\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
    },
    {
      language: "objective-c",
      code: "#import <Foundation/Foundation.h>\n\nint main() {\n  @autoreleasepool {\n    NSLog(@\"Hello, World!\");\n  }\n  return 0;\n}",
    },
    {
      language: "erlang",
      code: "-module(hello).\n-export([main/0]).\n\nmain() ->\n  io:format(\"Hello, World!~n\").",
    },
    {
      language: "f#",
      code: "printfn \"Hello, World!\"",
    },
    {
      language: "d",
      code: "import std.stdio;\n\nvoid main() {\n  writeln(\"Hello, World!\");\n}",
    },
    {
      language: "clojure",
      code: "(println \"Hello, World!\")",
    },
    {
      language: "groovy",
      code: "println \"Hello, World!\"",
    },
  ];
  