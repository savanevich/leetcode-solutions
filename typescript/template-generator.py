import os
import sys


def generate_ts_code(filename):
    code = f"""/**
 *
 */
export function problem(n: number): string[] {{
  return [];
}}
"""
    return code


def generate_test_ts_code(filename):
    code = f"""import {{problem}} from "./{filename.replace('.spec.ts', '')}";

test("Expected", () => {{
  expect([]).toEqual([]);
}});

"""
    return code

# Function to create folder and TS files


def create_folder_and_ts_files(template_name):
    try:
        folder_path = f"src/{template_name}"
        os.mkdir(folder_path)  # Create the folder

        filename = f"{template_name}.ts"
        file_path = os.path.join(folder_path, filename)

        with open(file_path, "w") as file:
            code = generate_ts_code(filename)
            file.write(code)

        print(f"Created {filename} file in folder '{folder_path}'.")

        test_filename = f"{template_name}.spec.ts"
        test_file_path = os.path.join(folder_path, test_filename)

        with open(test_file_path, "w") as file:
            code = generate_test_ts_code(test_filename)
            file.write(code)

        print(f"Created {test_filename} file in folder '{folder_path}'.")

    except Exception as e:
        print(f"Error: {e}")


# Main function
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python generate_ts_files.py <template_name>")
        sys.exit(1)

    template_name = sys.argv[1]

    create_folder_and_ts_files(template_name)
