#include <Python.h>

void print_python_list(PyObject *p);
void print_python_bytes(PyObject *p);
void print_python_float(PyObject *p);

/**
 * print_python_list - prints info about Python lists
 * @p: PyObject pointer
 */
void print_python_list(PyObject *p)
{
	PyObject *item;
	Py_ssize_t size, i;

	size = PyList_Size(p);
	printf("[*] Python list info\n");
	printf("[*] Size of the Python List = %ld\n", size);
	printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

	for (i = 0; i < size; i++)
	{
		item = PyList_GetItem(p, i);
		printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
		if (PyBytes_Check(item))
			print_python_bytes(item);
		if (PyFloat_Check(item))
			print_python_float(item);
	}
}

/**
 * print_python_bytes - prints info about Python bytes
 * @p: PyObject pointer
 */
void print_python_bytes(PyObject *p)
{
	Py_ssize_t size, i;
	char *str;

	printf("[.] bytes object info\n");
	if (!PyBytes_Check(p))
	{
		printf("  [ERROR] Invalid Bytes Object\n");
		return;
	}

	size = PyBytes_Size(p);
	str = PyBytes_AsString(p);

	printf("  size: %ld\n", size);
	printf("  trying string: %s\n", str);

	printf("  first %ld bytes: ", size < 10 ? size + 1 : 10);
	for (i = 0; i < size && i < 10; i++)
		printf("%02hhx%c", str[i], i + 1 == size || i + 1 == 10 ? '\n' : ' ');
}

/**
 * print_python_float - prints info about Python float
 * @p: PyObject pointer
 */
void print_python_float(PyObject *p)
{
	printf("[.] float object info\n");
	if (!PyFloat_Check(p))
	{
		printf("  [ERROR] Invalid Float Object\n");
		return;
	}

	printf("  value: %f\n", ((PyFloatObject *)p)->ob_fval);
}

